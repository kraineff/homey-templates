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
Способности задаются фабриками `sdk.state/float/toggle/range/mode/event/color`.

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
  temperature_k: { min: 1500, max: 9000 },
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
`events` · `temperature_k` · `scenes` · `retrievable` · `momentary` (кнопка).
Если тип значения Homey не совпадает с ожидаемым, уточните дженериком:
`sdk.state<string>({ … })`.

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

## Проверка перед PR

```bash
bunx tsc --noEmit
```

Битый шаблон пропускается с записью в лог — сервис не падает, устройство
остаётся без поддержки. Проверяйте локально.
