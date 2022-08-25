import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookieToken } from "../../storage/Cookie";

const usertoken = getCookieToken();

const BASE_URL = "https://g10000.shop/";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
  isFinish: false,
};

export const getAllCommentsById = createAsyncThunk(
  "comments/getAllCommentsById",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `https://g10000.shop/api/comments/${payload}`,
        {
          headers: { authorization: usertoken },
        }
      );
      const eachData = { postId: payload, data: data.data.data };

      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addComment = createAsyncThunk(
  "comments/addComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        `https://g10000.shop/api/comments/${payload.postId}`,
        {
          comment: payload.comment,
        },
        { headers: { authorization: usertoken } }
      );

      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(
        `${BASE_URL}api/comments/${payload.postId}/${payload.cid}`,
        { headers: { authorization: usertoken } }
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(payload.cid);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editComment = createAsyncThunk(
  "comments/editComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.put(
        `${BASE_URL}api/comments/${payload.postId}/${payload.cid}`,
        { comment: payload.editedComment },
        { headers: { authorization: usertoken } }
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllCommentsById.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.comments = action.payload;
      const commentStructure = {
        postId: action.payload.postId,
        comment: [action.payload.data],
      };
    },
    [addComment.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.comments.push(action.payload);
    },
    [deleteComment.fulfilled]: (state, action) => {
      return {
        ...state,
        comments: state.comments.filter((com) => com.id !== action.payload),
      };
    },
    [editComment.fulfilled]: (state, action) => {
      return {
        ...state,
        comments: state.comments.map((com) =>
          com.id === action.payload.id
            ? {
                ...com,
                comment: action.payload.comment,
                updatedAt: action.payload.updatedAt,
              }
            : com
        ),
      };
    },
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
