import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface User {
	email: string | null,
	token: string | null,
	id: string | null
}

const initialState: User ={
	email: null,
	token: null,
	id: null
}

export const userSlice = createSlice({
	name: "@@user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) =>{
			state.email = action.payload.email;
			state.token = action.payload.token;
			state.id = action.payload.id
		},
		removerUser: (state) =>{
			state.email = null;
			state.token = null;
			state.id = null;
		}
	}
});

//Reducer
export const userReducer = userSlice.reducer;
//Actoins
export const {setUser, removerUser} = userSlice.actions;