import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("windowcoverings_state", [
		sdk.toggle(sdk.Instance.pause, {
			retrievable: false,
			set: (value) => (value ? "idle" : undefined),
		}),
	]);
