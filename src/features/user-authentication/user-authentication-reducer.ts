import { createSlice } from "@reduxjs/toolkit";

export const slice = "userAuthentication"
const initialState = { email: "", isAuthenticated: false }

export const {
  actions,
  reducer,
} = createSlice({
  name: slice,
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.isAuthenticated = true;
      state.email = payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.email = "";
    },
  },
});

export const { login, logout } = actions
export const userAuthenticationSlice = slice
export default reducer