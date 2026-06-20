import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("alarm_moisture", [
		sdk.event(sdk.Instance.water_leak, {
			events: [sdk.Event.dry, sdk.Event.leak],
			get: (value) => [sdk.Event.dry, sdk.Event.leak][+value],
		}),
	]);
