import type { ConverterSDK } from "../sdk";

// Множители «единица Homey → мм рт. ст.». Homey по умолчанию отдаёт мбар, но единицу
// можно переопределить через capabilitiesOptions, и Homey ЛОКАЛИЗУЕТ подпись (на ru-хабе
// приходит «мбар»/«бар»/«мм рт. ст.»), поэтому держим и латиницу, и кириллицу.
// Незнакомую/отсутствующую единицу трактуем как мбар (дефолт Homey).
const TO_MMHG: Record<string, number> = {
	mmhg: 1,
	ммртст: 1,
	bar: 750.062,
	бар: 750.062,
	mbar: 0.750062,
	мбар: 0.750062,
	hpa: 0.750062,
	гпа: 0.750062,
	kpa: 7.50062,
	кпа: 7.50062,
	pa: 0.00750062,
	па: 0.00750062,
	atm: 760,
	атм: 760,
};

export default (sdk: ConverterSDK) =>
	sdk.converter("measure_pressure", [
		sdk.floatUnit(sdk.Instance.pressure, {
			to: sdk.Unit.pressure_mmhg,
			default: "mbar",
			convert: Object.fromEntries(
				Object.entries(TO_MMHG).map(([unit, k]) => [unit, (v: number) => Math.round(v * k)]),
			),
		}),
	]);
