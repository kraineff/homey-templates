import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("com.sensibo:Sensibo", [
		sdk.state({ capabilityId: "se_onoff" }),
		sdk.mode(sdk.Instance.thermostat, {
			capabilityId: "thermostat_mode",
			modes: [sdk.Mode.auto, sdk.Mode.heat, sdk.Mode.cool],
		}),
		sdk.mode(sdk.Instance.fan_speed, {
			capabilityId: "se_fanlevel",
			modes: [sdk.Mode.quiet, sdk.Mode.auto, sdk.Mode.low, sdk.Mode.medium, sdk.Mode.high],
		}),
		sdk.mode(sdk.Instance.swing, {
			capabilityId: "se_fandirection",
			modes: [sdk.Mode.vertical, sdk.Mode.horizontal, sdk.Mode.stationary, sdk.Mode.auto],
			get: (value) =>
				value === "horizontal"
					? "horizontal"
					: value === "stopped"
						? "stationary"
						: value === "both" || value === "rangeFull"
							? "auto"
							: "vertical",
			set: (value) =>
				value === "horizontal"
					? "horizontal"
					: value === "stationary"
						? "stopped"
						: value === "auto"
							? "both"
							: "rangeFull",
		}),
	]);
