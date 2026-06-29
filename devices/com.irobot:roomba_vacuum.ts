import type { ConverterSDK } from "../sdk";

export default (sdk: ConverterSDK) =>
	sdk.converter("com.irobot:roomba_vacuum", [
		sdk.state<string>({
			capabilityId: "vacuum_state",
			get: (value) =>
				["clean", "quick", "spot", "train", "manual", "paused", "stopped"].includes(value),
			set: (value) => ({
				[`command_${["dock", "start_clean"][+value]}`]: true,
			}),
		}),
		sdk.toggle<string>(sdk.Instance.pause, {
			capabilityId: "vacuum_state",
			get: (value) => ["paused", "stopped"].includes(value),
			set: (value) => ({
				[`command_${["resume", "pause"][+value]}`]: true,
			}),
		}),
		sdk.float(sdk.Instance.meter, { capabilityId: "measure_mission_minutes" }),
		sdk.event(sdk.Instance.open, {
			capabilityId: "alarm_bin_removed",
			events: [sdk.Event.closed, sdk.Event.opened],
			get: (value) => [sdk.Event.closed, sdk.Event.opened][+value],
		}),
	]);
