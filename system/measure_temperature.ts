import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("measure_temperature", [
		sdk.float(sdk.Instance.temperature, { unit: sdk.Unit.temperature_celsius }),
	]);
