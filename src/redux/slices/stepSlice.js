import { createSlice } from "@reduxjs/toolkit";

export const stepSlice = new createSlice({
	name: "steps",
	initialState: {
		activeStep: 0,
		assesmentOneSteps: 32,
		responses: [],
		baselineSteps: 41,
	},
	reducers: {
		saveResponse: (state, actions) => {
			if (state.responses.length === 0) {
				state.responses.push(actions.payload);
			} else {
				const index = actions.payload.pageIndex;
				state.responses[index] = actions.payload;
			}
			return state;
		},
		saveMany: (state, actions) => {
			const index = actions.payload.pageIndex;
			if (state.responses[index] === undefined) {
				state.responses[index] = [];
				state.responses[index].push(actions.payload);
			} else {
				if (
					state.responses[index].find(
						(value) => value.answer === actions.payload.answer
					) !== undefined
				) {
					state.responses[index] = state.responses[index].filter((value) => {
						return value.answer !== actions.payload.answer;
					});
				} else if (actions.payload.answer === "None") {
					state.responses[index].push(actions.payload);
					state.responses[index] = state.responses[index].filter((value) => {
						return value.answer === "None";
					});
				} else {
					state.responses[index].push(actions.payload);
				}
			}
			return state;
		},
		resetResponses: (state) => {
			state.responses.length = 0;
		},
		handleNext: (state) => {
			state.activeStep = state.activeStep + 1;
		},
		handleBack: (state) => {
			state.activeStep = state.activeStep - 1;
		},
		resetStep: (state, actions) => {
			state.activeStep = actions.payload;
		},
		dob: (state, actions) => {
			state.dob = actions.payload;
		},
		updateSteps: (state, actions) => {
			state.assesmentOneSteps = actions.payload;
		},
		updateBaselineSteps: (state, actions) => {
			state.baselineSteps = actions.payload;
		},
		handleSkip: (state, actions) => {
			state.activeStep = state.activeStep + actions.payload;
		},
		handleSkipBack: (state, actions) => {
			state.activeStep = state.activeStep - actions.payload;
		},
	},
});

export const {
	handleNext,
	handleBack,
	resetStep,
	saveResponse,
	resetResponses,
	dob,
	saveMany,
	updateSteps,
	updateBaselineSteps,
	handleSkip,
	handleSkipBack,
} = stepSlice.actions;

export default stepSlice.reducer;
