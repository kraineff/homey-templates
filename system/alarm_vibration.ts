import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("alarm_vibration", [
		sdk.event(sdk.Instance.vibration, {
			events: [sdk.Event.vibration],
			get: (value) => [undefined, sdk.Event.vibration][+value],
		}),
	]);
