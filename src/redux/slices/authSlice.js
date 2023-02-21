import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	accessToken: "",
	isLoggedIn: false,
   userDetails:""
};

const authSlice = createSlice({
	name: "authSlice",
	initialState,
	reducers: {
		updateToken: (state, actions) => {
			state.accessToken = actions.payload;
		},
		getUserDetails: (state, actions) => {
			state.userDetails = actions.payload;
		},
	},
});

export const { updateToken, getUserDetails} = authSlice.actions;
export default authSlice.reducer;
