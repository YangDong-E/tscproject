import { RootState } from "../store/store";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

const item = sessionStorage.getItem("token");
const Token = item === null ? null : JSON.parse(item).token;
const UserType = item === null ? null : JSON.parse(item).user_type;

interface LoginDataForm {
  username: string;
  password: string;
  login_type: string;
}

interface LoginState {
  status: string;
  error: string;
  userType: string;
  token?: string | null;
}

const initialState: LoginState = {
  status: "idle",
  error: "",
  userType: UserType ? UserType : "BUYER",
  token: Token ? Token : "",
};

//로그인 요청
export const fetchPostLogin = createAsyncThunk(
  "login/fetchPostLogin",
  async (
    { username, password, login_type }: LoginDataForm,
    { rejectWithValue }
  ) => {
    const url = `${BASE_URL}/accounts/login/`;

    try {
      const data = { username, password, login_type };
      const result = await axios.post(url, data);
      console.log(result.data);

      if (result.data) {
        //토큰 로컬스토리지에 저장
        sessionStorage.setItem("token", JSON.stringify(result.data));
      }

      return result.data;
    } catch (error: any) {
      console.log(error.response.data.FAIL_Message);
      return rejectWithValue(error.response.data.FAIL_Message);
    }
  }
);

//로그아웃
export const logout = createAsyncThunk("login/logout", async () => {
  sessionStorage.clear();
  const url = `${BASE_URL}/accounts/logout/`;

  try {
    const result = await axios.post(url);
    console.log(result.data);
    return result.data;
  } catch (error: any) {
    console.log(error.response.data.FAIL_Message);
    return rejectWithValue(error.response.data.FAIL_Message);
  }
});

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setLoginUserType: (state, action) => {
      state.userType = action.payload;
    },
  },
  extraReducers: (builder) => {
    //로그인
    builder.addCase(fetchPostLogin.pending, (state = initialState) => {
      state.status = "loading";
    });
    builder.addCase(
      fetchPostLogin.fulfilled,
      (state = initialState, action) => {
        state.status = "succeeded";
        state.token = action.payload.token || "";
      }
    );
    builder.addCase(fetchPostLogin.rejected, (state = initialState, action) => {
      state.status = "failed";
      if (action.payload) {
        state.error =
          Object.values(action.payload as any) &&
          "아이디 또는 패스워드가 일치하지 않습니다.";
      } else {
        state.error = action.error.message || "Something is wrong in Login:<";
      }
    });
    builder.addCase(logout.fulfilled, (state = initialState) => {
      state.status = "idle";
      state.error = "";
      state.token = null;
      state.userType = "BUYER";
    });
  },
});

export const getToken = (state: RootState) => state.login.token;
export const getLoginStatus = (state: RootState) => state.login.status;
export const getLoginError = (state: RootState) => state.login.error;
export const getLoginUserType = (state: RootState) => state.login.userType;

export const { setLoginUserType } = loginSlice.actions;

export default loginSlice.reducer;
function rejectWithValue(FAIL_Message: any): any {
  throw new Error("Function not implemented.");
}
