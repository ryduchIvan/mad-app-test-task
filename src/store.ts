import {configureStore, combineReducers} from "@reduxjs/toolkit";
import axios from "axios";
//Reducers
import {dragonsReducer} from "./features/dragons/dragonsSlice";
import {detailsReducer} from "./features/details/detailsSlice";
const rootReducer = combineReducers({
	dragons: dragonsReducer,
	details: detailsReducer
});

export const store = configureStore({
	reducer:rootReducer,
	devTools: true,
	middleware: (getDefaultMiddlawar) =>
	 getDefaultMiddlawar({
		thunk: {
			extraArgument: {
				axios
			},
		},
		serializableCheck: false
	})
});

export type RootState = ReturnType<typeof rootReducer>
