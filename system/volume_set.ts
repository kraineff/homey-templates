import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("volume_set", [sdk.percent(sdk.Instance.volume)]);
