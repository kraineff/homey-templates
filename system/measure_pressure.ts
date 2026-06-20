import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("measure_pressure", [
		sdk.float(sdk.Instance.pressure, { unit: sdk.Unit.pressure_bar }),
	]);
