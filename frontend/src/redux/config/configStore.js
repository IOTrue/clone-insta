// src/redux/config/configStore.js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import postDetailSlice from "../modules/postDetailSlice";
import imgUploadSlice from "../modules/imgUploadSlice";

const store = configureStore({
  reducer: {
    postDetailSlice,
    imgUploadSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
