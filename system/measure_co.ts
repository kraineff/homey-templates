import type { ConverterSDK } from "../sdk";

// У Яндекса нет инстанса для CO — подменяем co2_level (уступает реальному measure_co2).
export default (sdk: ConverterSDK) =>
	sdk.converter("measure_co", [
		sdk.float(sdk.Instance.co2_level, { unit: sdk.Unit.ppm, substitute: true }),
	]);
