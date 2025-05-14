import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get users from .env
const USER_API_URL = import.meta.env.VITE_USER_URL;

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(USER_API_URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const initialState = {
  adminIsLogged: false,
  userLoading: true,
  userData: [],
  userErrMsg: "",
};

const firstSlice = createSlice({
  name: "omar",
  initialState,
  reducers: {
    logincheck: (state) => {
      if (localStorage.id == 1) {
        state.adminIsLogged = true;
      }
    },
    loginValid: (state, action) => {
      const { email, password } = action.payload;
      const foundUser = state.userData.find(
        user => user.email === email && user.password === password
      );
      if (foundUser) {
        state.adminIsLogged = true;
        localStorage.setItem("id", foundUser.id);
        state.userErrMsg = "";
        
      } else {
        state.adminIsLogged = false;
        state.userErrMsg = "Invalid email or password";
        
      }
    },
    logout: (state) => {
      state.adminIsLogged = false;
      localStorage.removeItem("id");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.userLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.userLoading = false;
  // Force convert to array if possible
  state.userData = Array.isArray(action.payload)
    ? action.payload
    : Array.isArray(action.payload.data)
    ? action.payload.data
    : [];
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.userLoading = false;
        state.userErrMsg = action.payload;
      });
  },
});

export const { loginValid, logout, logincheck } = firstSlice.actions;
export const omar = firstSlice.reducer;
