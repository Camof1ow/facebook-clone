import { configureStore } from "@reduxjs/toolkit";
import facebookPosts from "../modules/postSlice";

export const store = configureStore({
  reducer: {
    facebookPosts: facebookPosts,
  },
});
