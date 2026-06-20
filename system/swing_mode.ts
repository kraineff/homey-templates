import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("swing_mode", [
		sdk.mode(sdk.Instance.cleanup_mode, {
			modes: [sdk.Mode.vertical, sdk.Mode.horizontal, sdk.Mode.auto],
			get: (value) =>
				["vertical", "horizontal"].includes(value) ? value : value === "both" ? "auto" : undefined,
			set: (value) => (value === "auto" ? "both" : value),
		}),
	]);
