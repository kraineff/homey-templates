import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("target_humidity", [
		sdk.range(sdk.Instance.humidity, {
			unit: sdk.Unit.percent,
			range: { min: 0, max: 100, precision: 1 },
			get: (value) => value * 100,
			set: (value) => value / 100,
		}),
	]);
