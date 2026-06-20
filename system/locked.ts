import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("locked", [sdk.state({ get: (value) => !value, set: (value) => !value })]);
