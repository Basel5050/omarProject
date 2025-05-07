import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getVideos = createAsyncThunk('videos/getVideos', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_VIDEOEDITING_URL}`);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || err.message);
  }
});

const initialState = {
  videosData: [],
  VideosLoading: true,
  vErrMsg: ""
};

const myVideo = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getVideos.pending, (state) => {
        state.VideosLoading = true;
      })
      .addCase(getVideos.fulfilled, (state, action) => {
        state.VideosLoading = false;
        state.videosData = action.payload;
      })
      .addCase(getVideos.rejected, (state, action) => {
        state.VideosLoading = false;
        state.vErrMsg = action.payload;
      });
  }
});

export const videos = myVideo.reducer;
