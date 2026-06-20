import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) => sdk.converter("onoff", [sdk.state()]);
