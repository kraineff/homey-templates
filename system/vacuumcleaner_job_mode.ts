import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("vacuumcleaner_job_mode", [
		sdk.mode(sdk.Instance.cleanup_mode, {
			modes: [sdk.Mode.normal, sdk.Mode.high, sdk.Mode.turbo, sdk.Mode.wet_cleaning, sdk.Mode.auto],
			get: (value) =>
				["normal", "high", "turbo", "auto"].includes(value)
					? value
					: value === "mop"
						? "wet_cleaning"
						: undefined,
			set: (value) => (value === "wet_cleaning" ? "mop" : value),
		}),
	]);
