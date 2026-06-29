# Шаблоны конвертации Homey ↔ Yandex (Алиса)

Описывают, как устройства Homey преобразуются в формат Yandex Smart Home.
Сервер подтягивает репозиторий и применяет изменения без перезапуска; новое
устройство добавляется через PR.

## Структура

```
system/    базовые capability Homey   (measure_power, dim, onoff, …)
custom/    capability вне Homey SDK   (child_lock, …)
devices/   шаблоны по homey driverId  (com.sensibo:Sensibo, …)
sdk.ts     типы и фабрики для шаблонов (генерируется, не редактировать)
```

Имя файла без расширения — это ключ; папки на него не влияют, только
раскладывают файлы. `system/` повторяет [системные capability Homey][caps],
`custom/` покрывает capability отдельных приложений. Для устройства берутся
шаблоны всех его capability и шаблон по driverId — последний переопределяет
совпадающие свойства.

[caps]: https://apps-sdk-v3.developer.homey.app/tutorial-device-capabilities.html

## Шаблон

`.ts`-файл с `default`-экспортом: `(sdk) => sdk.converter(key, [способности], options?)`.
Способности задаются фабриками `sdk.state/float/toggle/range/percent/floatUnit/mode/event/color`.

```ts
import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
  sdk.converter("measure_temperature", [
    sdk.float(sdk.Instance.temperature, { unit: sdk.Unit.temperature_celsius }),
  ]);
```

## Конфиг способности

| поле           | назначение                                                                 |
| -------------- | -------------------------------------------------------------------------- |
| `capabilityId` | homey-свойство (по умолчанию — имя файла). Массив = несколько по приоритету |
| `get`          | `(value, homey) => yandex` — преобразование при опросе                      |
| `set`          | `(value) => homey` — преобразование при команде                            |
| `parse`        | `(caps) => параметры` — вычислить параметры из устройства                   |

`get(value, homey)`: `value` — значение основного свойства, `homey.X` — значения
соседних свойств. Верните `undefined`, чтобы пропустить.

```ts
sdk.color(sdk.Instance.temperature_k, {
  temperature_k: { min: 2700, max: 6500 },
  get: (value, homey) => (homey.light_mode === "temperature" ? toKelvin(value) : undefined),
  set: (value) => ({ light_temperature: fromKelvin(value), light_mode: "temperature" }),
});
```

`set(value)`: примитив пишется в основное свойство, объект `{ id: значение }` —
несколько команд, `undefined` — ничего не писать.

`parse(caps)`: параметры из метаданных устройства (границы и т.п.).

```ts
sdk.range(sdk.Instance.temperature, {
  unit: sdk.Unit.temperature_celsius,
  parse: ({ target_temperature: t }) => ({
    range: { min: t?.min ?? 4, max: t?.max ?? 35, precision: t?.step ?? 0.5 },
  }),
});
```

Остальные поля зависят от типа: `unit` · `range` · `random_access` · `modes` ·
`events` · `temperature_k` · `scenes` · `retrievable` · `momentary` (кнопка) ·
`substitute` (подменное свойство, см. ниже). Если тип значения Homey не совпадает с
ожидаемым, уточните дженериком: `sdk.state<string>({ … })`.

Несколько способностей и тип устройства:

```ts
export default (sdk: ConverterSDK) =>
  sdk.converter(
    "com.sensibo:Sensibo",
    [
      sdk.state({ capabilityId: "se_onoff" }),
      sdk.mode(sdk.Instance.thermostat, {
        capabilityId: "thermostat_mode",
        modes: [sdk.Mode.auto, sdk.Mode.heat, sdk.Mode.cool],
      }),
    ],
    { deviceType: sdk.DeviceType.thermostat_ac },
  );
```

## Пресеты: проценты и единицы

Готовые билдеры, которые сами читают метаданные устройства (включая переопределения
через `capabilitiesOptions`):

- `sdk.percent(instance)` — процентные свойства Homey (`dim`, `volume_set`,
  `windowcoverings_set`, `target_humidity`). Приводит к процентам Яндекса: долю `0..1`
  масштабирует ×100, нативные `0..100` оставляет как есть; `min/max/step` берёт с
  устройства.

- `sdk.floatUnit(instance, { to, default, convert })` — датчик с конвертацией единиц.
  Берёт фактическую единицу с устройства и приводит к единице Яндекса `to`. Homey
  ЛОКАЛИЗУЕТ подпись единицы (на ru-хабе придёт «мбар»/«бар»), поэтому в `convert`
  держите ключи и на латинице, и на кириллице; `default` — ключ для устройств без явной
  единицы.

```ts
sdk.floatUnit(sdk.Instance.pressure, {
  to: sdk.Unit.pressure_mmhg,
  default: "mbar",
  convert: {
    mbar: (v) => Math.round(v * 0.750062),
    мбар: (v) => Math.round(v * 0.750062),
    bar: (v) => Math.round(v * 750.062),
    бар: (v) => Math.round(v * 750.062),
  },
});
```

## Типобезопасность

Каждый билдер принимает только подходящие instance: `float`/`floatUnit` — `FloatInstance`,
`range`/`percent` — `RangeInstance`, `toggle` — `ToggleInstance`, `mode` — `ModeInstance`,
`event` — `EventInstance`, `color` — цветовые. У `event` поле `events` обязательно и
типизировано под конкретный instance (например, для `motion` допустимы только
`detected`/`not_detected`). Неверный instance или событие — ошибка компиляции.

## Подменные свойства (substitute)

Несколько свойств Homey могут отображаться на один и тот же `(type, instance)` Яндекса:
одно точное (основное) и несколько приблизительных. Например `event gas` — основное
`alarm_gas`, подменные `alarm_co`/`alarm_co2` (у Яндекса нет отдельного CO). Пометьте
приблизительные `substitute: true`: при наличии основного на устройстве подменное
отбрасывается (не перезаписывает его), а без основного — работает как fallback. Порядок
шаблонов не важен — основное всегда выигрывает.

```ts
sdk.event(sdk.Instance.gas, {
  substitute: true, // alarm_co ≈ «газ»; уступит реальному alarm_gas
  events: [sdk.Event.not_detected, sdk.Event.detected],
  get: (value) => [sdk.Event.not_detected, sdk.Event.detected][+value],
});
```

Текущие пары (основное ← подменные): `gas` ← `alarm_co`,`alarm_co2`; `smoke` ←
`alarm_fire`,`alarm_heat`; `motion` ← `alarm_occupancy`,`alarm_presence`; `open` ←
`alarm_tamper`,`alarm_tank_open`; `water_leak` ← `alarm_moisture`; `tvoc` ←
`measure_ch2o`,`measure_tvoc_index`; `co2_level` ← `measure_co`; `pm1_density` ←
`measure_pm01`.

## Проверка перед PR

```bash
bunx tsc --noEmit
```

Битый шаблон пропускается с записью в лог — сервис не падает, устройство
остаётся без поддержки. Проверяйте локально.
