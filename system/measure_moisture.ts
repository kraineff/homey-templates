import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("measure_moisture", [sdk.float(sdk.Instance.humidity, { unit: sdk.Unit.percent })]);
