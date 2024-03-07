import { configureStore } from "@reduxjs/toolkit";
import tweetsReducer from "./tweets";

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
  },
});
