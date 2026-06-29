import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("com.xiaomi-mi:airrtc.agl001", [
		sdk.state<string>({
			capabilityId: "thermostat_mode_AqaraTRV",
			get: (value) => ({ off: false, manual: true })[value],
			set: (value) => ["off", "manual"][+value],
		}),
		sdk.mode(sdk.Instance.thermostat, {
			capabilityId: "thermostat_mode_AqaraTRV",
			modes: [sdk.Mode.auto],
			get: (value) => (value === "away" ? "auto" : undefined),
			set: (value) => (value === "auto" ? "away" : undefined),
		}),
		sdk.event(sdk.Instance.open, {
			capabilityId: "alarm_window",
			events: [sdk.Event.closed, sdk.Event.opened],
			get: (value) => [sdk.Event.closed, sdk.Event.opened][+value],
		}),
	]);
