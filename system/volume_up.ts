import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("volume_up", [
		sdk.range(sdk.Instance.volume, {
			range: { min: 0, max: 1, precision: 1 },
			random_access: false,
			retrievable: false,
			set: (value) => ({
				[`volume_${value > 0 ? "up" : "down"}`]: true,
			}),
		}),
	]);
