import { RootState } from "../store/store";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

//회원가입 데이터 타입
export interface JoinDataForm {
  username: string;
  password: string;
  password2: string;
  phone_number: string;
  name: string;
  email?: string;
  company_registration_number?: string;
  store_name?: string;
}

interface JoinState {
  joinStatus: string;

  error: string;
  userType: string;

  nameStatus: string;
  nameMessage: string;
  companyNumberStatus: string;
  companyMessage: string;
}

const initialState: JoinState = {
  joinStatus: "idle", //유휴상태

  error: "",
  userType: "BUYER",

  nameStatus: "idle",
  nameMessage: "",
  companyNumberStatus: "idle",
  companyMessage: "",
};

//아이디 유효성 검증
export const fetchPostUserName = createAsyncThunk(
  "join/fetchPostUserName",
  async (username: string, { rejectWithValue }) => {
    try {
      const data = { username };
      const result = await axios.post(
        `${BASE_URL}/accounts/signup/valid/username/`,
        data
      );
      console.log(result.data);
      return result.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.FAIL_Message);
    }
  }
);

//사업자 등록 번호 검증
export const fetchPostCompanyNum = createAsyncThunk(
  "join/fetchPostCompanyNum",
  async (company_registration_number: string, { rejectWithValue }) => {
    try {
      const data = { company_registration_number };
      const result = await axios.post(
        `${BASE_URL}/accounts/signup/valid/company_registration_number/`,
        data
      );
      console.log(result.data);
      return result.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.FAIL_Message);
    }
  }
);

//회원가입 유효성 검증
export const fetchPostJoin = createAsyncThunk(
  "join/fetchPostJoinBuyer",
  async (
    { userType, userData }: { userType: string; userData: JoinDataForm },
    { rejectWithValue }
  ) => {
    const url =
      userType === "BUYER"
        ? `${BASE_URL}/accounts/signup/`
        : `${BASE_URL}/accounts/signup_seller/`;

    try {
      const data = userData;
      const result = await axios.post(url, data);
      console.log(result.data);
      return result.data;
    } catch (error: any) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const joinSlice = createSlice({
  name: "joinSlice",
  initialState,
  reducers: {
    resetAll: () => initialState,
    resetName: (state) => {
      state.nameStatus = "idle";
      state.nameMessage = "";
    },
    resetCompanyNumber: (state) => {
      state.companyNumberStatus = "idle";
      state.companyMessage = "";
    },
    resetJoin: (state) => {
      state.joinStatus = "idle";
      state.error = "";
    },
    setJoinUserType: (state, action) => {
      state.userType = action.payload;
    },
  },
  extraReducers: (builder) => {
    //아이디 검증
    builder.addCase(fetchPostUserName.pending, (state = initialState) => {
      state.nameStatus = "loading";
      state.nameMessage = "";
      state.error = "";
    });
    builder.addCase(
      fetchPostUserName.fulfilled,
      (state = initialState, action) => {
        state.nameStatus = "succeeded";
        state.nameMessage = action.payload.Success;
      }
    );
    builder.addCase(
      fetchPostUserName.rejected,
      (state = initialState, action) => {
        state.nameStatus = "failed";
        if (action.payload) {
          state.nameMessage = action.payload as string;
        } else {
          state.error =
            action.error.message || "Something is wrong in username:<";
        }
      }
    );

    //사업자등록번호 검증
    builder.addCase(fetchPostCompanyNum.pending, (state = initialState) => {
      state.companyNumberStatus = "loading";
      state.companyMessage = "";
      state.error = "";
    });
    builder.addCase(
      fetchPostCompanyNum.fulfilled,
      (state = initialState, action) => {
        state.companyNumberStatus = "succeeded";
        state.companyMessage = action.payload.Success;
      }
    );
    builder.addCase(
      fetchPostCompanyNum.rejected,
      (state = initialState, action) => {
        state.companyNumberStatus = "failed";
        if (action.payload) {
          state.companyMessage = action.payload as string;
        } else {
          state.error =
            action.error.message || "Something is wrong in company number:<";
        }
      }
    );

    //회원가입 - 구매자
    builder.addCase(fetchPostJoin.pending, (state = initialState) => {
      state.joinStatus = "loading";
    });
    builder.addCase(fetchPostJoin.fulfilled, (state = initialState) => {
      state.joinStatus = "succeeded";
    });
    builder.addCase(fetchPostJoin.rejected, (state = initialState, action) => {
      state.joinStatus = "failed";
      if (action.payload) {
        state.error = Object.values(action.payload as any)
          .map((message: any) => message.join().toString())
          .join("\n");
      } else {
        state.error = action.error.message || "Something is wrong in Join:<";
      }
    });
  },
});

/*extraReducers를 사용하는 이유 : 비동기를 위해 createAsyncThunk 를 사용하여 정의된 액션함수를 사용하거나, 다른 slice 에서 정의된 액션함수를 사용하는 경우 */
export const getJoinStatus = (state: RootState) => state.join.joinStatus;
export const getJoinError = (state: RootState) => state.join.error;

export const getNameStatus = (state: RootState) => state.join.nameStatus;
export const getNameMessage = (state: RootState) => state.join.nameMessage;

export const getCompanyStatus = (state: RootState) =>
  state.join.companyNumberStatus;
export const getCompanyMessage = (state: RootState) =>
  state.join.companyMessage;

export const getJoinUserType = (state: RootState) => state.join.userType;

export const {
  resetAll,
  resetName,
  resetCompanyNumber,
  resetJoin,
  setJoinUserType,
} = joinSlice.actions;

export default joinSlice.reducer;
