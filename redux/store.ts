import { configureStore } from "@reduxjs/toolkit";
import audioSlice from "./slice/audioSlice";

export const store = configureStore({
  reducer: {
    audio: audioSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
