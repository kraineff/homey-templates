import type { ConverterSDK } from "../sdk";

// measure_pm01 — второе имя PM1 в Homey; подменяет measure_pm1 (тот же pm1_density).
export default (sdk: ConverterSDK) =>
	sdk.converter("measure_pm01", [
		sdk.float(sdk.Instance.pm1_density, { unit: sdk.Unit.density_mcg_m3, substitute: true }),
	]);
