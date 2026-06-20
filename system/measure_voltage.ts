import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("measure_voltage", [sdk.float(sdk.Instance.voltage, { unit: sdk.Unit.volt })]);
