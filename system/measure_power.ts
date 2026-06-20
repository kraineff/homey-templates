import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("measure_power", [sdk.float(sdk.Instance.power, { unit: sdk.Unit.watt })]);
