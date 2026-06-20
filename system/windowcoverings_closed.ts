import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("windowcoverings_closed", [
		sdk.state({ get: (value) => !value, set: (value) => !value }),
	]);
