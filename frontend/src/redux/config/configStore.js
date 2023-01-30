// src/redux/config/configStore.js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import postDetailSlice from "../modules/postDetailSlice";
import uploadSlice from "../modules/uploadSlice";

const store = configureStore({
  reducer: {
    postDetailSlice,
    uploadSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
