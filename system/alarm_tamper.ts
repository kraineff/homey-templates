import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("alarm_tamper", [
		sdk.event(sdk.Instance.open, {
			substitute: true,
			events: [sdk.Event.closed, sdk.Event.opened],
			get: (value) => [sdk.Event.closed, sdk.Event.opened][+value],
		}),
	]);
