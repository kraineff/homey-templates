import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("oscillating", [sdk.toggle(sdk.Instance.oscillation)]);
