import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("light_temperature", [
		sdk.color(sdk.Instance.temperature_k, {
			temperature_k: { min: 2700, max: 6500 },
			get: (_value, { light_temperature, light_mode }) => {
				if (light_mode === "color" || light_temperature === undefined) return undefined;
				return Math.round((1 - Number(light_temperature)) * (6500 - 2700) + 2700);
			},
			set: (value) => ({
				light_temperature: 1 - (value - 2700) / (6500 - 2700),
				light_mode: "temperature",
			}),
		}),
	]);
