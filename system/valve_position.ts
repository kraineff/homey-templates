import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("valve_position", [sdk.percent(sdk.Instance.open)]);
