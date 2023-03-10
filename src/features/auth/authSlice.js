import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "./../../firebase/firebase.config";

const initialState = {
  user: {},
  email: "",
  isLoading: true,
  isError: false,
  error: "",
  userType: "",
  routeChange: false,
};

export const createUser = createAsyncThunk(
  "auth/createUser",
  async ({ email, password }, thunkAPI) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);

    return data.user.email;
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    const data = await signInWithEmailAndPassword(auth, email, password);

    return data.user.email;
  }
);

export const getUser = createAsyncThunk(
  "auth/getUsers",
  async (email, thunkAPI) => {
    const res = await fetch(
      `${process.env.REACT_APP_DEV_URL}/api/get-user/${email}`
    );
    const data = await res.json();

    if (data.status) {
      return data.data;
    } else {
      return data.status;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.email = "";
      state.user = null;
    },
    setUser: (state, action) => {
      state.email = action.payload;
      state.isLoading = false;
    },
    toggleLoading: (state) => {
      state.isLoading = false;
    },
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
    setUserLocal: (state, action) => {
      state.user = action.payload;
    },
    setRouteChange: (state, action) => {
      state.routeChange = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.email = action.payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = true;
        state.email = "";
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.email = action.payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = true;
        state.email = "";
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = true;
        state.user.email = "";
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const {
  logout,
  setUser,
  toggleLoading,
  setUserType,
  setUserLocal,
  setRouteChange,
} = authSlice.actions;
export default authSlice.reducer;
