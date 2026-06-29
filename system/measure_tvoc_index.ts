import type { ConverterSDK } from "../sdk";

// Индекс ЛОС (безразмерный, ~1..500), не плотность — подменяет measure_tvoc,
// уступая реальному датчику в мкг/м³; шкалы сонаправлены (выше — хуже воздух).
export default (sdk: ConverterSDK) =>
	sdk.converter("measure_tvoc_index", [
		sdk.float(sdk.Instance.tvoc, { unit: sdk.Unit.density_mcg_m3, substitute: true }),
	]);
