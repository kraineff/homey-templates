import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("com.aqara:aqara.feeder.acn001", [
		sdk.state({ capabilityId: "feeder_action", momentary: true }),
	]);
