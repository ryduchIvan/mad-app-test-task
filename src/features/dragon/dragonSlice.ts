import {Dragon, Status} from "types/index";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { Axios } from "axios";
export const loadDragon = createAsyncThunk<{data: Dragon}, undefined, 
{
	extra: {axios: Axios},
	rejectValue: string
}>(
	"@@dragon/load-dragon",
	async(_, {extra: {axios}, rejectWithValue})=>{
		try {
			const response = axios.get("https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f")
			return response;	
		} catch (error) {
			return rejectWithValue("Something went wrong. Please reload cite!")
		}
	}
)
type DragonsSlice = {
	status : Status,
	list: any,
	error: null | string
}
const initialState: DragonsSlice ={
	status: "idle",
	list: {},
	error: null
}
const dragonsSlice = createSlice({
	name: "@@dragon",
	initialState,
	reducers:{},
	extraReducers(builder) {
		builder.addCase(loadDragon.pending, (state) =>{
			state.status= "loading"
		})
		builder.addCase(loadDragon.rejected, (state, action) =>{
			state.error = action.payload || "Unknow error.";
		})
		builder.addCase(loadDragon.fulfilled, (state, action) =>{
			state.list = action.payload.data;
		})
	},
});


export const dragonsReducer = dragonsSlice.reducer;