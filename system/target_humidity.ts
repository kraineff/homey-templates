import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("target_humidity", [sdk.percent(sdk.Instance.humidity)]);
