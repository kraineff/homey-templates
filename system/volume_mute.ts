import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) => sdk.converter("volume_mute", [sdk.toggle(sdk.Instance.mute)]);
