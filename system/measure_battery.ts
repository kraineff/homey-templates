import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("measure_battery", [
		sdk.float(sdk.Instance.battery_level, { unit: sdk.Unit.percent }),
	]);
