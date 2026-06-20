import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("measure_luminance", [
		sdk.float(sdk.Instance.illumination, { unit: sdk.Unit.illumination_lux }),
	]);
