import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) => sdk.converter("button", [sdk.state({ momentary: true })]);
