// СГЕНЕРИРОВАНО tools/gen-templates-sdk.ts — не редактировать вручную.

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
	light_lamp: "light.lamp",
	light_ceiling: "light.ceiling",
	light_strip: "light.strip",
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
	on: "on",
	hsv: "hsv",
	rgb: "rgb",
	temperature_k: "temperature_k",
	scene: "scene",
	get_stream: "get_stream",
	cleanup_mode: "cleanup_mode",
	coffee_mode: "coffee_mode",
	dishwashing: "dishwashing",
	fan_speed: "fan_speed",
	heat: "heat",
	input_source: "input_source",
	program: "program",
	swing: "swing",
	tea_mode: "tea_mode",
	thermostat: "thermostat",
	ventilation_mode: "ventilation_mode",
	work_speed: "work_speed",
	brightness: "brightness",
	channel: "channel",
	humidity: "humidity",
	open: "open",
	temperature: "temperature",
	volume: "volume",
	backlight: "backlight",
	controls_locked: "controls_locked",
	ionization: "ionization",
	keep_warm: "keep_warm",
	mute: "mute",
	oscillation: "oscillation",
	pause: "pause",
	amperage: "amperage",
	battery_level: "battery_level",
	co2_level: "co2_level",
	electricity_meter: "electricity_meter",
	food_level: "food_level",
	gas_meter: "gas_meter",
	heat_meter: "heat_meter",
	illumination: "illumination",
	meter: "meter",
	pm1_density: "pm1_density",
	pm2_5_density: "pm2.5_density",
	pm10_density: "pm10_density",
	power: "power",
	pressure: "pressure",
	tvoc: "tvoc",
	voltage: "voltage",
	water_level: "water_level",
	water_meter: "water_meter",
	vibration: "vibration",
	button: "button",
	motion: "motion",
	smoke: "smoke",
	gas: "gas",
	water_leak: "water_leak",
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
	double: "double",
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
}
// Запись значения Яндекса Y обратно в Homey.
interface Write<Y> {
	set?: (value: Y) => SetResult | undefined;
}

// Дескриптор способности — результат фабрики, передаётся в converter().
export type Cap = (converter: never, key: string) => void;
// Готовый конвертер устройства (собирается движком; для шаблона непрозрачен).
export interface Converter {
	readonly __converter: unique symbol;
}

// То, что приходит в шаблон параметром: фабрики способностей + перечисления.
export interface ConverterSDK {
	// Собирает конвертер устройства из набора способностей.
	converter(key: string, capabilities: Cap[], options?: { deviceType?: DeviceType }): Converter;

	// on_off: вкл/выкл. momentary — кнопка (команда без чтения).
	state<H extends HomeyValue = boolean>(
		config?: Read<H, boolean> & Write<boolean> & { momentary?: boolean },
	): Cap;
	// Бинарная функция (mute, oscillation, …).
	toggle<H extends HomeyValue = boolean>(
		instance: ToggleInstance,
		config?: Read<H, boolean> & Write<boolean>,
	): Cap;
	// Диапазон (яркость, громкость, температура уставки, …).
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
	float<H extends HomeyValue = number>(
		instance: FloatInstance,
		config?: Read<H, number> & { unit?: Unit },
	): Cap;
	// Режим из перечня modes (по умолчанию читается, только если значение входит в modes).
	mode<H extends HomeyValue = string>(
		instance: ModeInstance,
		config: Read<H, string> & Write<string> & { modes: Mode[] },
	): Cap;
	// Событие-датчик (только чтение): get отображает значение Homey в одно из допустимых
	// для этого instance событий; events — какие из них объявить.
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
