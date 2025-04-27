import { configureStore } from "@reduxjs/toolkit";
import { omar } from "./slices/firstSlice";

export const store = configureStore({
    reducer :{omar}
})