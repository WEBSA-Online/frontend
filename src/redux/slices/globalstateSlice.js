import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isChecked: false,
	processHasEnded: false,
	showTimer: false,
	tool2page: false,
	tool3page: false,
	registerpage:false,
	startbaseline:true,
	consent:""
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
		disableTimer: (state) => {
			state.showTimer = false;
		},
		changeIsChecked: (state, actions) => {
			state.isChecked = actions.payload.isChecked;
		},
		showTool2page: (state, actions) => {
			state.tool2page = !state.tool2page;
		},
		showTool3page: (state, actions) => {
			state.tool3page = !state.tool3page;
		},
		showbaseline: (state)=>{
			state.startbaseline = !state.startbaseline;
		},
		getConsent: (state, actions)=>{
			state.consent = actions.payload.consent;
		}
	},
});

export const {
	checkButton,
	endProcess,
	enableTimer,
	changeIsChecked,
	disableTimer,
	showTool2page,
	showTool3page,
	showbaseline,
	getConsent,
} = globalstateSlice.actions;
export default globalstateSlice.reducer;
