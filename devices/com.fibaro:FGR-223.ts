import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("com.fibaro:FGR-223", [
		sdk.percent(sdk.Instance.open, { capabilityId: ["windowcoverings_set", "dim"] }),
	]);
