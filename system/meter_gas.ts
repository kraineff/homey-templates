import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("meter_gas", [sdk.float(sdk.Instance.gas_meter, { unit: sdk.Unit.cubic_meter })]);
