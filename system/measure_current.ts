import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("measure_current", [sdk.float(sdk.Instance.amperage, { unit: sdk.Unit.ampere })]);
