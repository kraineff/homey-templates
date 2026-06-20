import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) => sdk.converter("speaker_playing", [sdk.state()]);
