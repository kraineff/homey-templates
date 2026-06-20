import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("channel_up", [
		sdk.range(sdk.Instance.channel, {
			range: { min: 0, max: 1, precision: 1 },
			random_access: false,
			retrievable: false,
			set: (value) => ({
				[`channel_${["down", "up"][value]}`]: true,
			}),
		}),
	]);
