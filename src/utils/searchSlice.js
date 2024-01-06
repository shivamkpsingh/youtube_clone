import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState: {

    },
    reducers: {
        cacheResults : (state, action) =>{
            return {...action.payload, ...state} // this line is not working , means not store data in reduct
            state = Object.assign(state, action.payload);// and this is working 
        }
    }
})
export const {cacheResults} = searchSlice.actions;

export default searchSlice.reducer;