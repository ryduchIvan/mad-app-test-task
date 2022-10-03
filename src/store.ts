import {configureStore, combineReducers} from "@reduxjs/toolkit";
import axios from "axios";
//Reducers
import{dragonsReducer} from "./features/dragon/dragonSlice";
const rootReducer = combineReducers({
	dragon: dragonsReducer
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
