import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookieToken, setAccessToken } from "../../storage/Cookie";

const userToken = getCookieToken()
const config = {
  headers: { Authorization: userToken},
};

//array 배열 설정?
const initialState = {
  friends: [],
  isFinish: false,
  isLoading: false,
  error: null,
};

export const __getFriends = createAsyncThunk(
  "friends/__getFriends",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `http://52.79.240.14:8080/api/friends`, config);
        //http://g10000.shop/api/friends`, 
        //`http://localhost:3001/friends`
        console.log(data.data.friends)
      return thunkAPI.fulfillWithValue(data.data.friends);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {},
  extraReducers: {
    [__getFriends.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
      state.isFinish = false;
    },
    [__getFriends.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.friends = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      state.isFinish = true;
    },
    [__getFriends.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      state.isFinish = true;
    },
  },
})

export const {} = friendsSlice.actions;
export default friendsSlice.reducer;