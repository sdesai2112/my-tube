import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  imitialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state[action.payload.suggetionKey] = action.payload.suggestionValue;
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice;
