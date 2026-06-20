import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("meter_power", [
		sdk.float(sdk.Instance.electricity_meter, { unit: sdk.Unit.kilowatt_hour }),
	]);
