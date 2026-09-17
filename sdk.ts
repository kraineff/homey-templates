// СГЕНЕРИРОВАНО tools/gen-templates-sdk.ts — не редактировать вручную.
//
// Шаблон отображает умение устройства Homey в умение или свойство Yandex Smart Home.
// Имя файла без расширения — это ключ: id умения Homey или driverId модели.
//
// Порядок решения:
//   1. Умение или свойство? Записываемое (setable) — умение Яндекса: state, range,
//      toggle, mode, color. Только читаемое — свойство: float (число) или event
//      (событие из закрытого набора).
//   2. Какой билдер? Смотри комментарии к фабрикам в ConverterSDK ниже.
//   3. Какой instance и единица? Смотри комментарии к Instance ниже — там сказано,
//      какому типу умения инстанс принадлежит и в чём измеряется.
//   4. Инстанс уже занят другим шаблоном этого устройства? Ставь substitute: true,
//      иначе молча перебьёшь действующий.
//   5. Подходящего инстанса нет? Не подбирай отдалённо похожий — такого шаблона быть
//      не должно, сначала поддержку добавляют в движок.
//
// Что легко упустить:
//   • Значения проходят нормализацию: проценты поджимаются к 0..100, а беззнаковые
//     float — к нулю снизу. Неверный масштаб поэтому не отбраковывается, а МАСКИРУЕТСЯ
//     под правдоподобные «100» или «0». Отрицательные величины (например RSSI в dBm)
//     через float не проходят вовсе.
//   • Одно негодное значение Яндекс отвергает вместе со всей пачкой устройства,
//     поэтому из get возвращают undefined, когда значения нет.
//   • Подпись единицы Homey локализует языком хаба: на русском придёт «мбар», а не
//     «mbar». В convert у floatUnit держи ключи и на латинице, и на кириллице.
//   • Суффиксное умение (measure_power.total) обслуживает шаблон базового measure_power
//     — отдельный файл под суффикс не нужен.

export const Capability = {
	on_off: "on_off",
	color_setting: "color_setting",
	video_stream: "video_stream",
	mode: "mode",
	range: "range",
	toggle: "toggle",
	float: "float",
	event: "event",
} as const;
export type Capability = (typeof Capability)[keyof typeof Capability];

export const DeviceType = {
	camera: "camera",
	cooking: "cooking",
	cooking_coffee_maker: "cooking.coffee_maker",
	cooking_kettle: "cooking.kettle",
	cooking_multicooker: "cooking.multicooker",
	dishwasher: "dishwasher",
	humidifier: "humidifier",
	iron: "iron",
	light: "light",
	light_ceiling: "light.ceiling",
	light_dimmable: "light.dimmable",
	light_garland: "light.garland",
	light_lamp: "light.lamp",
	light_sconce: "light.sconce",
	light_strip: "light.strip",
	light_torchere: "light.torchere",
	media_device: "media_device",
	media_device_receiver: "media_device.receiver",
	media_device_tv: "media_device.tv",
	media_device_tv_box: "media_device.tv_box",
	openable: "openable",
	openable_curtain: "openable.curtain",
	openable_door_lock: "openable.door_lock",
	openable_valve: "openable.valve",
	other: "other",
	pet_drinking_fountain: "pet_drinking_fountain",
	pet_feeder: "pet_feeder",
	purifier: "purifier",
	sensor: "sensor",
	sensor_button: "sensor.button",
	sensor_climate: "sensor.climate",
	sensor_gas: "sensor.gas",
	sensor_illumination: "sensor.illumination",
	sensor_motion: "sensor.motion",
	sensor_open: "sensor.open",
	sensor_smoke: "sensor.smoke",
	sensor_vibration: "sensor.vibration",
	sensor_water_leak: "sensor.water_leak",
	smart_meter: "smart_meter",
	smart_meter_cold_water: "smart_meter.cold_water",
	smart_meter_electricity: "smart_meter.electricity",
	smart_meter_gas: "smart_meter.gas",
	smart_meter_heat: "smart_meter.heat",
	smart_meter_hot_water: "smart_meter.hot_water",
	socket: "socket",
	switch: "switch",
	switch_relay: "switch.relay",
	thermostat: "thermostat",
	thermostat_ac: "thermostat.ac",
	vacuum_cleaner: "vacuum_cleaner",
	ventilation: "ventilation",
	ventilation_fan: "ventilation.fan",
	washing_machine: "washing_machine",
} as const;
export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType];

export const Event = {
	tilt: "tilt",
	fall: "fall",
	vibration: "vibration",
	opened: "opened",
	closed: "closed",
	click: "click",
	double_click: "double_click",
	long_press: "long_press",
	detected: "detected",
	not_detected: "not_detected",
	empty: "empty",
	low: "low",
	normal: "normal",
	high: "high",
	dry: "dry",
	leak: "leak",
} as const;
export type Event = (typeof Event)[keyof typeof Event];

export const Instance = {
	on: "on", // on_off — включено/выключено
	hsv: "hsv", // color_setting — объект { h, s, v }
	rgb: "rgb", // color_setting — число
	temperature_k: "temperature_k", // color_setting — Кельвины, границы в temperature_k
	scene: "scene", // color_setting — имя сцены из scenes
	get_stream: "get_stream", // video_stream — список протоколов
	cleanup_mode: "cleanup_mode", // mode — уборка
	coffee_mode: "coffee_mode", // mode — напиток кофемашины
	dishwashing: "dishwashing", // mode — программа посудомойки
	fan_speed: "fan_speed", // mode — скорость вентиляции
	heat: "heat", // mode — режим нагрева
	input_source: "input_source", // mode — источник сигнала
	program: "program", // mode — рабочая программа
	swing: "swing", // mode — направление потока
	tea_mode: "tea_mode", // mode — заварка чая
	thermostat: "thermostat", // mode — температурный режим климата
	ventilation_mode: "ventilation_mode", // mode — режим вентиляции
	work_speed: "work_speed", // mode — скорость работы
	brightness: "brightness", // range — проценты 0..100
	channel: "channel", // range — без единицы
	humidity: "humidity", // range — проценты 0..100 | float — проценты 0..100
	open: "open", // range — проценты 0..100 | event — opened/closed
	temperature: "temperature", // range — уставка, °C или K | float — измерение, °C или K
	volume: "volume", // range — проценты или условные единицы
	backlight: "backlight", // toggle — подсветка
	controls_locked: "controls_locked", // toggle — блокировка управления
	ionization: "ionization", // toggle — ионизация
	keep_warm: "keep_warm", // toggle — поддержание тепла
	mute: "mute", // toggle — звук выключен
	oscillation: "oscillation", // toggle — вращение
	pause: "pause", // toggle — пауза
	amperage: "amperage", // float — амперы
	battery_level: "battery_level", // float — проценты 0..100 | event — low/normal
	co2_level: "co2_level", // float — ppm
	electricity_meter: "electricity_meter", // float — киловатт-часы
	food_level: "food_level", // float — проценты 0..100 | event — empty/low/normal
	gas_meter: "gas_meter", // float — кубометры
	heat_meter: "heat_meter", // float — гигакалории
	illumination: "illumination", // float — люксы
	meter: "meter", // float — без единицы (беззнаковое: отрицательное поджимается к 0)
	pm1_density: "pm1_density", // float — мкг/м³
	pm2_5_density: "pm2.5_density", // float — мкг/м³
	pm10_density: "pm10_density", // float — мкг/м³
	power: "power", // float — ватты
	pressure: "pressure", // float — атм, бар, мм рт. ст. или паскали
	tvoc: "tvoc", // float — мкг/м³
	voltage: "voltage", // float — вольты
	water_level: "water_level", // float — проценты 0..100 | event — empty/low/normal
	water_meter: "water_meter", // float — кубометры
	vibration: "vibration", // event — tilt/fall/vibration
	button: "button", // event — click/double_click/long_press
	motion: "motion", // event — detected/not_detected
	smoke: "smoke", // event — detected/not_detected/high
	gas: "gas", // event — detected/not_detected/high
	water_leak: "water_leak", // event — dry/leak
} as const;
export type Instance = (typeof Instance)[keyof typeof Instance];

export const Mode = {
	wet_cleaning: "wet_cleaning",
	dry_cleaning: "dry_cleaning",
	mixed_cleaning: "mixed_cleaning",
	auto: "auto",
	eco: "eco",
	smart: "smart",
	turbo: "turbo",
	cool: "cool",
	dry: "dry",
	fan_only: "fan_only",
	heat: "heat",
	preheat: "preheat",
	high: "high",
	low: "low",
	medium: "medium",
	max: "max",
	min: "min",
	fast: "fast",
	slow: "slow",
	express: "express",
	normal: "normal",
	quiet: "quiet",
	horizontal: "horizontal",
	stationary: "stationary",
	vertical: "vertical",
	supply_air: "supply_air",
	extraction_air: "extraction_air",
	one: "one",
	two: "two",
	three: "three",
	four: "four",
	five: "five",
	six: "six",
	seven: "seven",
	eight: "eight",
	nine: "nine",
	ten: "ten",
	americano: "americano",
	cappuccino: "cappuccino",
	double_espresso: "double_espresso",
	espresso: "espresso",
	latte: "latte",
	black_tea: "black_tea",
	flower_tea: "flower_tea",
	green_tea: "green_tea",
	herbal_tea: "herbal_tea",
	oolong_tea: "oolong_tea",
	puerh_tea: "puerh_tea",
	red_tea: "red_tea",
	white_tea: "white_tea",
	glass: "glass",
	intensive: "intensive",
	pre_rinse: "pre_rinse",
	aspic: "aspic",
	baby_food: "baby_food",
	baking: "baking",
	bread: "bread",
	boiling: "boiling",
	cereals: "cereals",
	cheesecake: "cheesecake",
	deep_fryer: "deep_fryer",
	dessert: "dessert",
	fowl: "fowl",
	frying: "frying",
	macaroni: "macaroni",
	milk_porridge: "milk_porridge",
	multicooker: "multicooker",
	pasta: "pasta",
	pilaf: "pilaf",
	pizza: "pizza",
	sauce: "sauce",
	slow_cook: "slow_cook",
	soup: "soup",
	steam: "steam",
	stewing: "stewing",
	vacuum: "vacuum",
	yogurt: "yogurt",
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode];

export const Unit = {
	ampere: "ampere",
	cubic_meter: "cubic_meter",
	density_mcg_m3: "density.mcg_m3",
	gigacalorie: "gigacalorie",
	illumination_lux: "illumination.lux",
	kilowatt_hour: "kilowatt_hour",
	percent: "percent",
	ppm: "ppm",
	pressure_atm: "pressure.atm",
	pressure_bar: "pressure.bar",
	pressure_mmhg: "pressure.mmhg",
	pressure_pascal: "pressure.pascal",
	temperature_celsius: "temperature.celsius",
	temperature_kelvin: "temperature.kelvin",
	volt: "volt",
	watt: "watt",
} as const;
export type Unit = (typeof Unit)[keyof typeof Unit];

// Публичный API шаблонов (единый источник). Используется фасадом для проверки
// соответствия (sdk satisfies ConverterSDK) и эмитится генератором в templates/sdk.ts.
// sdk инъектируется в рантайме — здесь только типы.

export type HomeyValue = string | number | boolean;

// Возможность Homey с метаданными (min/max/step/decimals).
export interface HomeyCapability {
	id: string;
	type: string;
	value: HomeyValue;
	getable: boolean;
	min?: number;
	max?: number;
	step?: number;
	decimals?: number;
	units?: string;
}

// Значения соседних возможностей устройства (для get, зависящего от соседей).
export type Homey = Record<string, HomeyValue | undefined>;
// Возможности устройства с метаданными — аргумент parse.
type Caps = Record<string, HomeyCapability | undefined>;

// instance, сгруппированные по типу способности — чтобы билдер принимал только свои
// (Extract проверяет, что каждый идентификатор реально есть в Instance).
export type RangeInstance = Extract<
	Instance,
	"brightness" | "channel" | "humidity" | "open" | "temperature" | "volume"
>;
export type ToggleInstance = Extract<
	Instance,
	"backlight" | "controls_locked" | "ionization" | "keep_warm" | "mute" | "oscillation" | "pause"
>;
export type ModeInstance = Extract<
	Instance,
	| "cleanup_mode"
	| "coffee_mode"
	| "dishwashing"
	| "fan_speed"
	| "heat"
	| "input_source"
	| "program"
	| "swing"
	| "tea_mode"
	| "thermostat"
	| "ventilation_mode"
	| "work_speed"
>;
export type FloatInstance = Extract<
	Instance,
	| "amperage"
	| "battery_level"
	| "co2_level"
	| "electricity_meter"
	| "food_level"
	| "gas_meter"
	| "heat_meter"
	| "humidity"
	| "illumination"
	| "meter"
	| "pm1_density"
	| "pm2.5_density"
	| "pm10_density"
	| "power"
	| "pressure"
	| "temperature"
	| "tvoc"
	| "voltage"
	| "water_level"
	| "water_meter"
>;
export type ColorInstance = Extract<Instance, "hsv" | "rgb" | "temperature_k" | "scene">;
export type EventInstance = Extract<
	Instance,
	| "vibration"
	| "open"
	| "button"
	| "motion"
	| "smoke"
	| "gas"
	| "battery_level"
	| "water_leak"
	| "food_level"
	| "water_level"
>;

// Допустимые события каждого event-instance — Яндекс принимает только их.
interface EventsByInstance {
	vibration: Extract<Event, "tilt" | "fall" | "vibration">;
	open: Extract<Event, "opened" | "closed">;
	button: Extract<Event, "click" | "double_click" | "long_press">;
	motion: Extract<Event, "detected" | "not_detected">;
	smoke: Extract<Event, "detected" | "not_detected" | "high">;
	gas: Extract<Event, "detected" | "not_detected" | "high">;
	battery_level: Extract<Event, "low" | "normal">;
	food_level: Extract<Event, "empty" | "low" | "normal">;
	water_level: Extract<Event, "empty" | "low" | "normal">;
	water_leak: Extract<Event, "dry" | "leak">;
}

// Тип цвета зависит от instance: hsv — объект, scene — имя сцены, иначе число.
type ColorValue<I extends Instance> = I extends "hsv"
	? { h: number; s: number; v: number }
	: I extends "scene"
		? string
		: number;

// Результат set: значение основной способности, набор команд { id: значение } или undefined.
type SetResult = HomeyValue | Record<string, HomeyValue>;

// Чтение. H — тип значения Homey основной способности, Y — значение Яндекса.
interface Read<H extends HomeyValue, Y> {
	// Одна или несколько (по приоритету) способностей-источников. По умолчанию — имя шаблона.
	capabilityId?: string | string[];
	// value — значение основной способности; homey — значения всех способностей (соседей).
	get?: (value: H, homey: Homey) => Y | undefined;
	// Параметры из метаданных устройства (например, границы из min/max/step).
	parse?: (caps: Caps) => Record<string, unknown>;
	retrievable?: boolean;
	// Подменная (приблизительная) способность: тот же (type,instance), что и основная
	// (напр. alarm_co → event gas). Не перекрывает основную при merge — применяется,
	// только если основной нет.
	substitute?: boolean;
}
// Запись значения Яндекса Y обратно в Homey.
interface Write<Y> {
	set?: (value: Y) => SetResult | undefined;
}

// Дескриптор способности — результат фабрики, передаётся в converter().
export type Cap = (converter: never, key: string) => void;
// Готовый конвертер устройства (собирается движком; для шаблона непрозрачен).
export type Converter = object;

// То, что приходит в шаблон параметром: фабрики способностей + перечисления.
export interface ConverterSDK {
	// Собирает конвертер устройства из набора способностей.
	converter(key: string, capabilities: Cap[], options?: { deviceType?: DeviceType }): Converter;

	// on_off: вкл/выкл. momentary — кнопка (команда без чтения).
	// Берут для: boolean, записываемое, главное включение устройства (onoff и аналоги).
	//   sdk.state({})                       — умение называется как файл
	//   sdk.state({ capabilityId: "se_onoff" })  — источник с другим id
	state<H extends HomeyValue = boolean>(
		config?: Read<H, boolean> & Write<boolean> & { momentary?: boolean },
	): Cap;
	// Бинарная функция (mute, oscillation, …).
	// Берут для: boolean, записываемое, но НЕ главное вкл/выкл — подсветка, блокировка,
	// пауза, звук. Главное включение — это state.
	toggle<H extends HomeyValue = boolean>(
		instance: ToggleInstance,
		config?: Read<H, boolean> & Write<boolean>,
	): Cap;
	// Диапазон (яркость, громкость, температура уставки, …).
	// Берут для: number, записываемое, со своей шкалой. Границы — из метаданных
	// устройства через parse, а не константами:
	//   sdk.range(sdk.Instance.temperature, {
	//     unit: sdk.Unit.temperature_celsius,
	//     parse: ({ target_temperature: c }) => ({
	//       range: { min: c?.min ?? 4, max: c?.max ?? 35, precision: c?.step ?? 0.5 },
	//     }),
	//   })
	// Если шкала процентная (доли 0..1 или 0..100) — берут percent, он проще.
	range<H extends HomeyValue = number>(
		instance: RangeInstance,
		config?: Read<H, number> &
			Write<number> & {
				unit?: Unit;
				range?: { min: number; max: number; precision: number };
				random_access?: boolean;
			},
	): Cap;
	// Процентный диапазон: Homey-доли (0..1) или 0..100 — авто-нормализация к процентам
	// Яндекса с учётом capabilitiesOptions устройства (min/max/step берутся с устройства).
	percent(
		instance: RangeInstance,
		config?: { capabilityId?: string | string[]; retrievable?: boolean },
	): Cap;
	// Числовое свойство-датчик (только чтение).
	// Берут для: number, только чтение, единица у инстанса фиксирована:
	//   sdk.float(sdk.Instance.temperature, { unit: sdk.Unit.temperature_celsius })
	// Если единица у устройств разная — берут floatUnit.
	float<H extends HomeyValue = number>(
		instance: FloatInstance,
		config?: Read<H, number> & { unit?: Unit },
	): Cap;
	// Датчик с конвертацией единиц: единица берётся С УСТРОЙСТВА (учитывает
	// capabilitiesOptions) и приводится к единице Яндекса через таблицу convert;
	// default — ключ для устройств без явной единицы.
	floatUnit(
		instance: FloatInstance,
		config: {
			capabilityId?: string | string[];
			to: Unit;
			default?: string;
			convert: Record<string, (value: number) => number>;
		},
	): Cap;
	// Режим из перечня modes (по умолчанию читается, только если значение входит в modes).
	// Берут для: enum, записываемое. Значения Homey отображают в режимы Яндекса:
	//   sdk.mode(sdk.Instance.thermostat, {
	//     modes: [sdk.Mode.auto, sdk.Mode.heat, sdk.Mode.cool],
	//     get: (value) => ({ auto: "auto", heating: "heat" })[value],
	//     set: (value) => ({ auto: "auto", heat: "heating" })[value],
	//   })
	mode<H extends HomeyValue = string>(
		instance: ModeInstance,
		config: Read<H, string> & Write<string> & { modes: Mode[] },
	): Cap;
	// Событие-датчик (только чтение): get отображает значение Homey в одно из допустимых
	// для этого instance событий; events — какие из них объявить.
	// Берут для: boolean только на чтение, обычно тревоги (alarm_*):
	//   sdk.event(sdk.Instance.motion, {
	//     events: [sdk.Event.not_detected, sdk.Event.detected],
	//     get: (value) => [sdk.Event.not_detected, sdk.Event.detected][+value],
	//   })
	// Набор событий у каждого instance закрыт — см. EventsByInstance выше.
	event<I extends EventInstance, H extends HomeyValue = boolean>(
		instance: I,
		config: Read<H, EventsByInstance[I]> & { events: EventsByInstance[I][] },
	): Cap;
	// Цвет (hsv / rgb / temperature_k / scene).
	color<I extends ColorInstance, H extends HomeyValue = number>(
		instance: I,
		config: Read<H, ColorValue<I>> &
			Write<ColorValue<I>> & { temperature_k?: { min: number; max: number }; scenes?: string[] },
	): Cap;
	// Видеопоток.
	video(config: Read<HomeyValue, { protocols: string[] }> & { protocols: string[] }): Cap;

	Capability: typeof Capability;
	DeviceType: typeof DeviceType;
	Event: typeof Event;
	Instance: typeof Instance;
	Mode: typeof Mode;
	Unit: typeof Unit;
}
