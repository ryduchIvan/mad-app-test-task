import {createSlice , createAsyncThunk}from "@reduxjs/toolkit";
import { Dragon, Status } from "types";
import { Axios } from "axios";
export const getAllDragons = createAsyncThunk<{data: Dragon[]}, undefined, 
{
	extra: {axios: Axios},
	rejectValue: string
}>(
	"@@dragons/get-all-dragons",
	async(_, {extra: {axios}, rejectWithValue})=>{
		try {
			const response = await axios.get("https://api.spacexdata.com/v4/dragons")
			return response;	
		} catch (error) {
			return rejectWithValue("Something went wrong. Please reload cite!")
		}
	}
)


type DragonsSlice = {
	status : Status,
	list: Dragon[] | [],
	error: null | string
}

const initialState: DragonsSlice = {
	status: "idle",
	list: [],
	error: null
}
const dragonsSlice = createSlice({
	name: "@@dragons",
	initialState,
	reducers:{},
	extraReducers(builder) {
		builder.addCase(getAllDragons.pending, (state) =>{
			state.status= "loading"
		})
		builder.addCase(getAllDragons.rejected, (state, action) =>{
			console.log(action);
			state.error = action.payload || "Unknow error.";
			state.status = "rejected";
		})
		builder.addCase(getAllDragons.fulfilled, (state, action) =>{
			state.list = action.payload.data;
			state.status = "received"
		})
	},
});

//Reducer 
export const dragonsReducer = dragonsSlice.reducer;