import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	responses:[],
	toolOneComplete:false
};

const responsesSlice = createSlice({
	name: "responsesSlice",
	initialState,
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
		resetResponses: (state) => {
			state.responses.length = 0;
		},
	},
});

export const { saveResponse, resetResponses} = responsesSlice.actions;
export default responsesSlice.reducer;
