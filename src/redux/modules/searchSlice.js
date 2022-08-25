import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookieToken } from "../../storage/Cookie";

const usertoken = getCookieToken();

const BASE_URL = "https://g10000.shop/";

const initialState = {
  searchResult: [],
  isLoading: false,
  error: null,
  isFinish: false,
};

const headertype = {
  "Content-type": "application/json; charset=UTF-8",
  Accept: "*/*",
};

export const searchFriend = createAsyncThunk(
  "search/searchFriend",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        `${BASE_URL}api/search/members`,
        { nickname: payload },
        { headers: { authorization: usertoken } }
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const searchSlice = createSlice({
  name: "searchResult",
  initialState,
  reducers: {},
  extraReducers: {
    [searchFriend.pending]: (state) => {
      state.isLoading = true;
      state.isFinish = false;
    },
    [searchFriend.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isFinish = true;
      state.searchResult = action.payload;
    },
    [searchFriend.rejected]: (state, action) => {
      state.isLoading = false;
      state.isFinish = true;
      state.error = action.payload;
    },
  },
});

export const {} = searchSlice.actions;
export default searchSlice.reducer;
