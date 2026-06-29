import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("alarm_fire", [
		sdk.event(sdk.Instance.smoke, {
			substitute: true,
			events: [sdk.Event.not_detected, sdk.Event.detected],
			get: (value) => [sdk.Event.not_detected, sdk.Event.detected][+value],
		}),
	]);
