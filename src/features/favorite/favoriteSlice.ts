import {createSlice} from "@reduxjs/toolkit";
import { Dragon } from "types";

interface favoriteSliceI {
	list: Dragon[]
}

const initialState: favoriteSliceI = {
	list: []
};

 const favoriteSlice = createSlice({
	name: "@@favorite",
	initialState,
	reducers: {
		addToFavorite: (state, action) => {
			const id = action.payload.id;
			const itemIndex = state.list.findIndex(item => item.id === id);
			if (itemIndex < 0) {
				const newItem = {
					...action.payload,
				}
				state.list.push(newItem);
			} else {
				return state
			}
		},
		removeFromCart: (state, action) => {
			const id = action.payload;
			state.list.forEach((item, index) => {
				if (item.id === id) {
					return state.list.splice(index, 1);
				}
			})
		},
	}
});

//Reducer
export const favoriteReducer = favoriteSlice.reducer;
//Actions
export const {addToFavorite, removeFromCart} = favoriteSlice.actions;