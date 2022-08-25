import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookieToken } from "../../storage/Cookie";

const usertoken = getCookieToken();

const initialState = {
  facebookPosts: [],
  isLoading: false,
  error: null,
  isFinish: false,
};

export const getFbPostLists = createAsyncThunk(
  "fbPosts/getFbPostLists",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("https://g10000.shop/api/posts", {
        headers: { authorization: usertoken },
      });
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addFbPost = createAsyncThunk(
  "fbPosts/addFbPost",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        "https://g10000.shop/api/posts",
        {
          imageUrl: payload.imgFile,
          content: payload.postContent,
        },
        { headers: { authorization: usertoken } }
      );
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteFbPost = createAsyncThunk(
  "fbPosts/deleteFbPost",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(
        `https://g10000.shop/api/posts/${payload}`,
        { headers: { authorization: usertoken } }
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editFbPost = createAsyncThunk(
  "fbPosts/editFbPost",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await axios.put(
        `https://g10000.shop/api/posts/${payload.postId}`,
        {
          content: payload.postContent,
          imageUrl: payload.imgFileNull,
        },
        { headers: { authorization: usertoken } }
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "facebookPosts",
  initialState,
  reducers: {},
  extraReducers: {
    [getFbPostLists.pending]: (state) => {
      state.isLoading = true;
      state.isFinish = false;
    },
    [getFbPostLists.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isFinish = true;
      state.facebookPosts = action.payload;
    },
    [getFbPostLists.rejected]: (state, action) => {
      state.isLoading = false;
      state.isFinish = true;
      state.error = action.payload;
    },
    [addFbPost.fulfilled]: (state, action) => {
      console.log(action.payload);
      const postingData = {
        commentNum: action.payload.commentsNum,
        likeNum: action.payload.likeNum,
        posts: {
          content: action.payload.content,
          createdAt: action.payload.createdAt,
          id: action.payload.postId,
          imageUrl: action.payload.imageUrl,
          member: action.payload.member,
          modifiedAt: action.payload.modifiedAt,
        },
      };
      console.log(postingData);
      state.facebookPosts.unshift(postingData);
    },
    [deleteFbPost.fulfilled]: (state, action) => {
      return {
        ...state,
        facebookPosts: state.facebookPosts.filter(
          (fb) => fb.posts.id !== action.payload
        ),
      };
    },
    [editFbPost.fulfilled]: (state, action) => {
      return {
        ...state,
        facebookPosts: state.facebookPosts.map((fb) =>
          fb.posts.id === action.payload.postId
            ? {
                ...fb,
                posts: {
                  ...fb.posts,
                  content: action.payload.content,
                  imageUrl: action.payload.imageUrl,
                  modifiedAt: action.payload.modifiedAt,
                },
              }
            : fb
        ),
      };
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
