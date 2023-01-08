import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isChecked: false,
	processHasEnded: false,
	showTimer: false,
	tool2page: false,
	tool3page: false,
};

const globalstateSlice = createSlice({
	name: "globalstateSlice",
	initialState,
	reducers: {
		checkButton: (state, actions) => {
			if (actions.payload === false) {
				state.isChecked = true;
			} else {
				state.isChecked = true;
			}
		},
		endProcess: (state) => {
			state.processHasEnded = true;
		},
		enableTimer: (state) => {
			state.showTimer = true;
		},
		enableTool2Page: (state) => {
			state.tool2page = true;
		},
		enableTool3Page: (state) => {
			state.tool3page = true;
		},
	},
});

export const { checkButton, endProcess, enableTimer} =
	globalstateSlice.actions;
export default globalstateSlice.reducer;
