import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import searchReducer from "./slices/searchSlice";
import chatReducer from "./slices/chatSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    chat: chatReducer,
  },
});

export default store;
