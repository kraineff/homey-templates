import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("alarm_tank_empty", [
		sdk.event(sdk.Instance.water_level, {
			events: [sdk.Event.normal, sdk.Event.empty],
			get: (value) => [sdk.Event.normal, sdk.Event.empty][+value],
		}),
	]);
