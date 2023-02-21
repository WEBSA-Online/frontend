import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import steps from "./slices/stepSlice"
import isCheckedReducer from "./slices/globalstateSlice"
import responses from "./slices/responsesSlice"
import auth from "./slices/authSlice";

const persistConfig = {
	key: "root",
	storage,
};

const stepsReducer = persistReducer(persistConfig, steps);
const responseReducer = persistReducer(persistConfig, responses);
const authReducer = persistReducer(persistConfig, auth);


export const store = configureStore({
	reducer: {
		steps: stepsReducer,
		globalstate: isCheckedReducer,
		responses: responseReducer,
		auth: authReducer,
	},
	middleware: [thunk],
});

export const persistor = persistStore(store);
