import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("fan_mode", [
		sdk.mode(sdk.Instance.fan_speed, {
			modes: [
				sdk.Mode.auto,
				sdk.Mode.quiet,
				sdk.Mode.low,
				sdk.Mode.medium,
				sdk.Mode.high,
				sdk.Mode.turbo,
			],
		}),
	]);
