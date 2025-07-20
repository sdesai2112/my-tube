import { createSlice } from "@reduxjs/toolkit";

const videoDetailSlice = createSlice({
  name: "video-details",
  initialState: {},
  reducers: {
    addVideoDetails: (state, action) => {
      return { ...action.payload };
    },
    removeVideoDetails: (state, action) => {
      return {};
    },
  },
});

export const { addVideoDetails, removeVideoDetails } = videoDetailSlice.actions;
export default videoDetailSlice.reducer;
