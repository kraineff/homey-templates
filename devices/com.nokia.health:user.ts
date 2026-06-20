import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter(
		"com.nokia.health:user",
		[
			sdk.float(sdk.Instance.temperature, {
				capabilityId: "nh_measure_body_temperature",
				unit: sdk.Unit.temperature_celsius,
			}),
			sdk.float(sdk.Instance.pressure, {
				capabilityId: "nh_measure_systolic_blood_pressure",
				unit: sdk.Unit.pressure_mmhg,
			}),
			sdk.float(sdk.Instance.food_level, {
				capabilityId: "nh_measure_fat_ratio",
				unit: sdk.Unit.percent,
			}),
			sdk.float(sdk.Instance.meter, { capabilityId: "nh_measure_weight" }),
		],
		{ deviceType: sdk.DeviceType.smart_meter },
	);
