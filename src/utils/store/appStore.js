import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import searchReducer from "./slices/searchSlice";
import chatReducer from "./slices/chatSlice";
import videoDetailsReducer from "./slices/videoDetails";
import commentsReducer from "./slices/commentsSlice";
import displayVideosReducer from "./slices/displayVideosSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    chat: chatReducer,
    videoDetails: videoDetailsReducer,
    comments: commentsReducer,
    displayVideos: displayVideosReducer,
  },
});

export default store;
