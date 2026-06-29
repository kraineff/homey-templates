import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("alarm_co2", [
		sdk.event(sdk.Instance.gas, {
			substitute: true,
			events: [sdk.Event.not_detected, sdk.Event.detected],
			get: (value) => [sdk.Event.not_detected, sdk.Event.detected][+value],
		}),
	]);
