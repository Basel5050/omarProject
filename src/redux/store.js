import { configureStore } from "@reduxjs/toolkit";
import { omar } from "./slices/firstSlice";
import { videos } from "./slices/videoSlice";
import { motionGraphics } from "./slices/motionSlice";
import { logoAnimation } from "./slices/logoSlice";
import {  latestWork } from "./slices/lastWrokSlice";
import { myShowreel } from "./slices/showReelSlice";

export const store = configureStore({
    reducer :{omar,videos,motionGraphics,logoAnimation,latestWork,myShowreel}
})