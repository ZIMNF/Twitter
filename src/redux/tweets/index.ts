import { createSlice } from "@reduxjs/toolkit";
import { ITweets } from "../../pages/home/types";

const initialState = {
  tweets: [],
} as {
  tweets: ITweets[];
};

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    setTweets: (state: { tweets: ITweets[] }, action: { payload: ITweets[] }) => {
      state.tweets = action.payload;
    },
  },
});

export const { setTweets } = tweetsSlice.actions;

export default tweetsSlice.reducer;
