import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import steps from "./slices/stepSlice"
import isCheckedReducer from "./slices/globalstateSlice"
import responses from "./slices/responsesSlice"

const persistConfig = {
	key: "root",
	storage,
};

const stepsReducer = persistReducer(persistConfig, steps);
const responseReducer = persistReducer(persistConfig, responses);


export const store = configureStore({
	reducer: {
		steps: stepsReducer,
		globalstate: isCheckedReducer,
		responses: responseReducer,
	},
	middleware: [thunk],
});

export const persistor = persistStore(store);
