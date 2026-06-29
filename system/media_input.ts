import type { ConverterSDK } from "../sdk";

const INPUTS = ["hdmi_1", "hdmi_2", "hdmi_3", "usb_1", "usb_2", "component"];

export default (sdk: ConverterSDK) => {
	const modes = [
		sdk.Mode.one,
		sdk.Mode.two,
		sdk.Mode.three,
		sdk.Mode.four,
		sdk.Mode.five,
		sdk.Mode.six,
	];
	return sdk.converter("media_input", [
		sdk.mode(sdk.Instance.input_source, {
			modes,
			get: (value) => modes[INPUTS.indexOf(value)],
			set: (value) => INPUTS[modes.indexOf(value)],
		}),
	]);
};
