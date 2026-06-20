import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("codes.lucasvdh.android-tv:remote", [
		sdk.range(sdk.Instance.channel, {
			range: { min: 0, max: 1, precision: 1 },
			random_access: false,
			retrievable: false,
			set: (value) => ({
				[`key_channel_${["down", "up"][value]}`]: true,
			}),
		}),
		sdk.toggle(sdk.Instance.pause, {
			retrievable: false,
			set: (value) => ({
				[`key_${["play", "pause"][+value]}`]: true,
			}),
		}),
	]);
