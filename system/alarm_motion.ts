import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("alarm_motion", [
		sdk.event(sdk.Instance.motion, {
			events: [sdk.Event.not_detected, sdk.Event.detected],
			get: (value) => [sdk.Event.not_detected, sdk.Event.detected][+value],
		}),
	]);
