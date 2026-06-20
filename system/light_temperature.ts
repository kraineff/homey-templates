import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("light_temperature", [
		sdk.color(sdk.Instance.temperature_k, {
			temperature_k: { min: 1500, max: 9000 },
			get: (_value, { light_temperature, light_mode }) => {
				if (light_mode !== "temperature" || light_temperature === undefined) return undefined;
				return Math.round(((1 - light_temperature - 0) * (9000 - 1500)) / (1 - 0) + 1500);
			},
			set: (value) => ({
				light_temperature: 1 - (((value - 1500) * (1 - 0)) / (9000 - 1500) + 0),
				light_mode: "temperature",
			}),
		}),
	]);
