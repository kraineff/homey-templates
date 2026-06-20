import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("measure_pm10", [
		sdk.float(sdk.Instance.pm10_density, { unit: sdk.Unit.density_mcg_m3 }),
	]);
