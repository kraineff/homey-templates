import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("windowcoverings_set", [sdk.percent(sdk.Instance.open)]);
