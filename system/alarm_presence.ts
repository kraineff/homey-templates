import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("alarm_presence", [
		sdk.event(sdk.Instance.motion, {
			substitute: true,
			events: [sdk.Event.not_detected, sdk.Event.detected],
			get: (value) => [sdk.Event.not_detected, sdk.Event.detected][+value],
		}),
	]);
