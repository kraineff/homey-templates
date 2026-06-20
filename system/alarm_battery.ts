import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("alarm_battery", [
		sdk.event(sdk.Instance.battery_level, {
			events: [sdk.Event.normal, sdk.Event.low],
			get: (value) => [sdk.Event.normal, sdk.Event.low][+value],
		}),
	]);
