import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookieToken } from "../../storage/Cookie";

const usertoken = getCookieToken();

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
        `http://52.79.240.14:8080/api/comments/${payload}`,
        {
          headers: { authorization: usertoken },
        }
      );
      console.log(data);
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
        `http://52.79.240.14:8080/api/comments/${payload.postId}`,
        {
          comment: payload.comment,
        },
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
      state.comments = action.payload;
    },
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
