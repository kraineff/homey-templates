import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("measure_co", [sdk.float(sdk.Instance.co2_level, { unit: sdk.Unit.ppm })]);
