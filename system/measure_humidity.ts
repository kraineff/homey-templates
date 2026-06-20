import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("measure_humidity", [sdk.float(sdk.Instance.humidity, { unit: sdk.Unit.percent })]);
