import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("thermostat_mode", [
		sdk.state<string>({
			get: (value) => ["heat", "auto", "cool"].includes(value),
			set: (value) => ["off", "heat"][+value],
		}),
		sdk.mode(sdk.Instance.thermostat, {
			modes: [sdk.Mode.auto, sdk.Mode.heat, sdk.Mode.cool],
			get: (value) => (["auto", "heat", "cool"].includes(value) ? value : undefined),
		}),
	]);
