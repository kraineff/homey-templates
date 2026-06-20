import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("measure_pm25", [
		sdk.float(sdk.Instance.pm2_5_density, { unit: sdk.Unit.density_mcg_m3 }),
	]);
