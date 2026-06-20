import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("alarm_tank_open", [
		sdk.event(sdk.Instance.open, {
			events: [sdk.Event.closed, sdk.Event.opened],
			get: (value) => [sdk.Event.closed, sdk.Event.opened][+value],
		}),
	]);
