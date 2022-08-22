import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  facebookPosts: [],
  isLoading: false,
  error: null,
  isFinite: false,
};

export const getFbPostLists = createAsyncThunk(
  "fbPosts/getFbPostLists",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get();
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "facebookPosts",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = postSlice.actions;
export default postSlice.reducer;
