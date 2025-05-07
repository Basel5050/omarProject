import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getLastWork = createAsyncThunk('lastwork', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_LASTWORK_URL}`);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || err.message);
  }
});

const initialState = {
  lastData: [],
  lastLoading: true,
  vErrMsg: ""
};

const myLastWork = createSlice({
  name: "lastwork",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getLastWork.pending, (state) => {
        state.lastLoading = true;
      })
      .addCase(getLastWork.fulfilled, (state, action) => {
        state.lastLoading = false;
        state.lastData = action.payload;
      })
      .addCase(getLastWork.rejected, (state, action) => {
        state.lastLoading = false;
        state.vErrMsg = action.payload;
      });
  }
});

export const latestWork = myLastWork.reducer;
