import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("meter_water", [
		sdk.float(sdk.Instance.water_meter, { unit: sdk.Unit.cubic_meter }),
	]);
