import type { ConverterSDK } from "../sdk";

// У Яндекса нет инстанса для перегрева — подменяем smoke (уступает реальному alarm_smoke).
export default (sdk: ConverterSDK) =>
	sdk.converter("alarm_heat", [
		sdk.event(sdk.Instance.smoke, {
			substitute: true,
			events: [sdk.Event.not_detected, sdk.Event.detected],
			get: (value) => [sdk.Event.not_detected, sdk.Event.detected][+value],
		}),
	]);
