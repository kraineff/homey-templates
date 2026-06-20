import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("com.fibaro:FGR-223", [
		sdk.range(sdk.Instance.open, {
			capabilityId: ["windowcoverings_set", "dim"],
			unit: sdk.Unit.percent,
			range: { min: 0, max: 100, precision: 1 },
			get: (value) => value * 100,
			set: (value) => value / 100,
		}),
	]);
