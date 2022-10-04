import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
//Types
import { Dragon } from "types";
import { Axios } from "axios";
import { Status } from "types";
export const getOneDragon = createAsyncThunk<{data: Dragon}, Dragon["id"], 
{
	extra: {axios: Axios},
	rejectValue: string
}>(
	"@@details/get-one-dragon",
	async(id, {extra: {axios}, rejectWithValue})=>{
		try {
			const response = await axios.get(`https://api.spacexdata.com/v4/dragons/${id}`)
			return response;	
		} catch (error) {
			return rejectWithValue("Something went wrong. Please reload cite!")
		}
	}
);

type DetailsSlice = {
	id: string
	status : Status,
	list: Dragon |null,
	error: null | string
}

const initialState: DetailsSlice = {
	id: "5e9d058859b1ffd8e2ad5f90",
	status: "idle",
	list: null,
	error: null
}

const detailsSlice  = createSlice({
	name: "@@details",
	initialState,
	reducers:{
		setId: (state, action: PayloadAction<string>) =>{
			state.id = action.payload;
		}
	},
	extraReducers(builder) {
		builder.addCase(getOneDragon.pending, (state) =>{
			state.status= "loading"
		})
		builder.addCase(getOneDragon.rejected, (state, action) =>{
			console.log(action);
			state.error = action.payload || "Unknow error.";
			state.status = "rejected";
		})
		builder.addCase(getOneDragon.fulfilled, (state, action) =>{
			state.list = action.payload.data;
			state.status = "received"
		})
	},
});
//Reducer
export const detailsReducer = detailsSlice.reducer;
//Actions
export const {setId}  = detailsSlice.actions;