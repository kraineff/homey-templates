import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("measure_ch2o", [
		sdk.float(sdk.Instance.tvoc, { unit: sdk.Unit.density_mcg_m3, substitute: true }),
	]);
