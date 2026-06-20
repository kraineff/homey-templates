import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("light_hue", [
		sdk.color(sdk.Instance.hsv, {
			get: (_value, { light_hue, light_saturation, light_mode }) => {
				if (light_mode !== "color") return undefined;
				return {
					h: Math.round((light_hue ?? 1) * 360),
					s: Math.round((light_saturation ?? 1) * 100),
					v: 100,
				};
			},
			set: (value) => ({
				light_hue: value.h / 360,
				light_saturation: value.s / 100,
				light_mode: "color",
			}),
		}),
	]);
