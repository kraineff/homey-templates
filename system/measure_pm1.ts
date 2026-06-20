import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("measure_pm1", [
		sdk.float(sdk.Instance.pm1_density, { unit: sdk.Unit.density_mcg_m3 }),
	]);
