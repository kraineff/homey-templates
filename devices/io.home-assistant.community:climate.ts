import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("io.home-assistant.community:climate", [
		sdk.state({ capabilityId: "climate_on" }),
		sdk.mode(sdk.Instance.thermostat, {
			capabilityId: "climate_mode",
			modes: [sdk.Mode.auto, sdk.Mode.heat, sdk.Mode.cool, sdk.Mode.dry, sdk.Mode.fan_only],
		}),
	]);
