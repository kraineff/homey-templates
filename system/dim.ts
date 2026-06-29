import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) => sdk.converter("dim", [sdk.percent(sdk.Instance.brightness)]);
