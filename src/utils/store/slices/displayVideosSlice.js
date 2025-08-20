import { createSlice } from "@reduxjs/toolkit";

const displayVideos = createSlice({
  name: "displayVideos",
  initialState: null,
  reducers: {
    addDisplayVideos: (state, action) => {
      return action.payload;
    },
  },
});

export const { addDisplayVideos } = displayVideos.actions;
export default displayVideos.reducer;
