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

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    // [getFbPostLists.pending]: (state) => {
    //   state.isLoading = true;
    //   state.isFinish = false;
    // },
    // [getFbPostLists.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.isFinish = true;
    //   state.facebookPosts = action.payload;
    // },
    // [getFbPostLists.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.isFinish = true;
    //   state.error = action.payload;
    // },
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
