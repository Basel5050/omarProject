import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getLogo = createAsyncThunk('logo/getLogo', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_LOGOANIMATION_URL}`);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || err.message);
  }
});

const initialState = {
  logoData: [],
  logoLoading: true,
  vErrMsg: ""
};

const myLogo = createSlice({
  name: "logo",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getLogo.pending, (state) => {
        state.logoLoading = true;
      })
      .addCase(getLogo.fulfilled, (state, action) => {
        state.logoLoading = false;
        state.logoData = action.payload;
      })
      .addCase(getLogo.rejected, (state, action) => {
        state.logoLoading = false;
        state.vErrMsg = action.payload;
      });
  }
});

export const logoAnimation = myLogo.reducer;
