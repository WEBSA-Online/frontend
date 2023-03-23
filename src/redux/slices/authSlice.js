import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	accessToken: "",
	isLoggedIn: false,
   userDetails:"",
	timeOfLogin:""
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
		getTimeOfLogin: (state, actions) => {
			state.timeOfLogin = actions.payload
		}
	},
});

export const { updateToken, getUserDetails, getTimeOfLogin } = authSlice.actions;
export default authSlice.reducer;
