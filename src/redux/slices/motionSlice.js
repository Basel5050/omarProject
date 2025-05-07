import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMotion = createAsyncThunk('motion/getMotion', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_MOTIONGRAPHICS_URL}`);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || err.message);
  }
});

const initialState = {
  motionData: [],
  motionLoading: true,
  vErrMsg: ""
};

const myMotion = createSlice({
  name: "motion",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMotion.pending, (state) => {
        state.motionLoading = true;
      })
      .addCase(getMotion.fulfilled, (state, action) => {
        state.motionLoading = false;
        state.motionData = action.payload;
      })
      .addCase(getMotion.rejected, (state, action) => {
        state.motionLoading = false;
        state.vErrMsg = action.payload;
      });
  }
});

export const motionGraphics = myMotion.reducer;
