import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("net.schmidt-cisternas.pcc-alt:aircon", [
		sdk.mode(sdk.Instance.fan_speed, {
			capabilityId: "fan_speed",
			modes: [sdk.Mode.auto, sdk.Mode.low, sdk.Mode.medium, sdk.Mode.high],
			get: (value) => ({ Auto: "auto", Low: "low", Mid: "medium", High: "high" })[value],
			set: (value) => ({ auto: "Auto", low: "Low", medium: "Mid", high: "High" })[value],
		}),
		sdk.mode(sdk.Instance.program, {
			capabilityId: "operation_mode",
			modes: [sdk.Mode.auto, sdk.Mode.dry, sdk.Mode.cool, sdk.Mode.heat, sdk.Mode.fan_only],
			get: (value) =>
				({ Auto: "auto", Dry: "dry", Cool: "cool", Heat: "heat", Fan: "fan_only" })[value],
			set: (value) =>
				({ auto: "Auto", dry: "Dry", cool: "Cool", heat: "Heat", fan_only: "Fan" })[value],
		}),
	]);
