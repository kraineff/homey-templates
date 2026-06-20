import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("target_temperature", [
		sdk.range(sdk.Instance.temperature, {
			unit: sdk.Unit.temperature_celsius,
			parse: ({ target_temperature }) => ({
				range: {
					min: target_temperature?.min ?? 4,
					max: target_temperature?.max ?? 35,
					precision: target_temperature?.step ?? 0.5,
				},
			}),
		}),
	]);
