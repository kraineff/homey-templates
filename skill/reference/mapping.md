# Таблицы соответствий Homey → Яндекс

Источник правды — `~/server/apps/api/app/src/alice/models/yandex.ts` и
`src/alice/converter/templates/public-types.ts`. Если здесь чего-то нет, а Яндекс это
поддерживает — сначала добавить в `yandex.ts`, затем `bun run gen`, и только потом
использовать в шаблоне.

## Умения (управляемые)

| Тип | Билдер | instance |
| --- | --- | --- |
| `on_off` | `sdk.state` | `on` (подставляется сам) |
| `range` | `sdk.range`, `sdk.percent` | `brightness` `channel` `humidity` `open` `temperature` `volume` |
| `toggle` | `sdk.toggle` | `backlight` `controls_locked` `ionization` `keep_warm` `mute` `oscillation` `pause` |
| `mode` | `sdk.mode` | `cleanup_mode` `coffee_mode` `dishwashing` `fan_speed` `heat` `input_source` `program` `swing` `tea_mode` `thermostat` `ventilation_mode` `work_speed` |
| `color_setting` | `sdk.color` | `hsv` `rgb` `temperature_k` `scene` |
| `video_stream` | `sdk.video` | `get_stream` |

Единицы у `range`: `brightness`/`humidity`/`open` — `percent`; `temperature` —
`temperature_celsius` или `temperature_kelvin`; `volume` — проценты или условные
единицы; `channel` — без единицы.

## Свойства (только чтение)

### `float` — числовой датчик

| instance | Единица |
| --- | --- |
| `amperage` | `ampere` |
| `battery_level` | `percent` |
| `co2_level` | `ppm` |
| `electricity_meter` | `kilowatt_hour` |
| `food_level` | `percent` |
| `gas_meter` | `cubic_meter` |
| `heat_meter` | `gigacalorie` |
| `humidity` | `percent` |
| `illumination` | `illumination_lux` |
| `meter` | без единицы |
| `pm1_density`, `pm2.5_density`, `pm10_density` | `density_mcg_m3` |
| `power` | `watt` |
| `pressure` | `pressure_atm` `pressure_bar` `pressure_mmhg` `pressure_pascal` |
| `temperature` | `temperature_celsius` `temperature_kelvin` |
| `tvoc` | `density_mcg_m3` |
| `voltage` | `volt` |
| `water_level` | `percent` |
| `water_meter` | `cubic_meter` |

Процентные (`battery_level`, `food_level`, `humidity`, `water_level`) движок поджимает
к `0..100`. Остальные беззнаковые поджимаются к нулю снизу; знак сохраняется только у
`temperature`.

### `event` — событие

| instance | Допустимые значения |
| --- | --- |
| `vibration` | `tilt` `fall` `vibration` |
| `open` | `opened` `closed` |
| `button` | `click` `double_click` `long_press` |
| `motion` | `detected` `not_detected` |
| `smoke` | `detected` `not_detected` `high` |
| `gas` | `detected` `not_detected` `high` |
| `battery_level` | `low` `normal` |
| `food_level` | `empty` `low` `normal` |
| `water_level` | `empty` `low` `normal` |
| `water_leak` | `dry` `leak` |

Значение вне набора своего instance Яндекс отвергает.

## Режимы `mode`

Уборка `wet_cleaning` `dry_cleaning` `mixed_cleaning` · авто `auto` `eco` `smart`
`turbo` · климат `cool` `dry` `fan_only` `heat` `preheat` · скорость `high` `low`
`medium` `max` `min` `fast` `slow` · программы `express` `normal` `quiet` · поток
`horizontal` `stationary` `vertical` · вентиляция `supply_air` `extraction_air` ·
номера `one`…`ten` · кофе `americano` `cappuccino` `double_espresso` `espresso`
`latte` · чай `black_tea` `flower_tea` `green_tea` `herbal_tea` `oolong_tea`
`puerh_tea` `red_tea` `white_tea` · посуда `glass` `intensive` `pre_rinse` ·
готовка `aspic` `baby_food` `baking` `bread` `boiling` `cereals` `cheesecake`
`deep_fryer` `dessert` `fowl` `frying` `macaroni` `milk_porridge` `multicooker`
`pasta` `pilaf` `pizza` `sauce` `slow_cook` `soup` `steam` `stewing` `vacuum`
`yogurt`

Режима `double` не существует — только `double_espresso`.

## Типы устройств

`camera` · `cooking` `cooking.coffee_maker` `cooking.kettle` `cooking.multicooker` ·
`dishwasher` · `humidifier` · `iron` · `light` `light.ceiling` `light.dimmable`
`light.garland` `light.lamp` `light.sconce` `light.strip` `light.torchere` ·
`media_device` `media_device.receiver` `media_device.tv` `media_device.tv_box` ·
`openable` `openable.curtain` `openable.door_lock` `openable.valve` · `other` ·
`pet_drinking_fountain` `pet_feeder` · `purifier` · `sensor` `sensor.button`
`sensor.climate` `sensor.gas` `sensor.illumination` `sensor.motion` `sensor.open`
`sensor.smoke` `sensor.vibration` `sensor.water_leak` · `smart_meter`
`smart_meter.cold_water` `smart_meter.electricity` `smart_meter.gas`
`smart_meter.heat` `smart_meter.hot_water` · `socket` · `switch` `switch.relay` ·
`thermostat` `thermostat.ac` · `vacuum_cleaner` · `ventilation` `ventilation.fan` ·
`washing_machine`

Тип определяется автоматически по классу и иконке Homey. Задавать `deviceType` вручную
имеет смысл в шаблоне драйвера (`devices/`), когда автоопределение промахивается.

## Коды ошибок устройства

`DEVICE_UNREACHABLE` `DEVICE_BUSY` `DEVICE_NOT_FOUND` `INTERNAL_ERROR`
`INVALID_ACTION` `INVALID_VALUE` `NOT_SUPPORTED_IN_CURRENT_MODE` `DEVICE_OFF`
`REMOTE_CONTROL_DISABLED`

Возвращаются движком; шаблону обычно достаточно вернуть `undefined` из `get`, когда
значения нет.

## Что уже покрыто

`system/` — системные умения Homey (64 шаблона): все `alarm_*`, `measure_*`,
`meter_*`, `onoff`, `dim`, `target_temperature`, `target_humidity`, `thermostat_mode`,
`windowcoverings_*`, `volume_*`, `light_*`, `locked`, `button`, `valve_position`,
`fan_mode`, `swing_mode`, `oscillating`, `speaker_playing`, `media_input`,
`vacuumcleaner_job_mode`, `channel_up`, `garagedoor_closed`.

`custom/` — умения отдельных приложений: `child_lock`.

`devices/` — шаблоны по `driverId`: `codes.lucasvdh.android-tv:remote`,
`com.aqara:aqara.feeder.acn001`, `com.fibaro:FGR-223`, `com.irobot:roomba_vacuum`,
`com.nokia.health:user`, `com.sensibo:Sensibo`, `com.xiaomi-mi:airrtc.agl001`,
`io.home-assistant.community:climate`, `net.schmidt-cisternas.pcc-alt:aircon`.

Актуальный список — `ls` по папкам распакованного репозитория в
`~/server/apps/api/app/templates`. Чего не хватает именно на живом хабе, покажет
`scripts/inspect.ts --homey <id> --gaps`.
