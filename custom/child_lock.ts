import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("child_lock", [sdk.toggle(sdk.Instance.controls_locked)]);
