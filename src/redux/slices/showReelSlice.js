import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getShowreelLink = createAsyncThunk('showreelLink', async(i,{rejectWithValue})=>{
    try {
        const res = await axios.get(`${import.meta.env.VITE_SHOWREEL_URL}`)
        return res.data
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message)
    }
})



const initialState = {
    showreelLink : '',
    showreelLoading: true,
    showreelErr:""
}
const showreel = createSlice({
    name:'showreel',
    initialState, 
    extraReducers: (builder)=>(
        builder.addCase(getShowreelLink.pending, (state)=>{
            state.showreelLoading = true

        }),
        builder.addCase(getShowreelLink.fulfilled, (state,action)=>{
            state.showreelLoading = false
            state.showreelLink = action.payload
            console.log(state.showreelLink);
            
        }),
        builder.addCase(getShowreelLink.rejected,(state,action)=>{
            state.showreelLoading = false
            state.showreelErr = action.payload


        })
    )

})
export const myShowreel = showreel.reducer