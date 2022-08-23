import { configureStore } from "@reduxjs/toolkit";
import comments from "../modules/commentSlice";
import facebookPosts from "../modules/postSlice";
import userInfo from "../modules/userinfoSlice";

export const store = configureStore({
  reducer: {
    facebookPosts: facebookPosts,
    userInfo: userInfo,
    comments: comments,
  },
});
