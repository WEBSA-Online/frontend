import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isChecked: false,
	processHasEnded: false,
	showTimer:false,
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
	},
});

export const { checkButton, endProcess, enableTimer} =
	globalstateSlice.actions;
export default globalstateSlice.reducer;
