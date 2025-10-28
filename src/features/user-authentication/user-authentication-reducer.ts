import { createSlice } from "@reduxjs/toolkit";

export const userAuthenticationSlice = "userAuthentication"
const initialState: {
  email: string | null;
  isAuthenticated: boolean
} = { email: null, isAuthenticated: false }

const { actions, reducer, } = createSlice({
  name: userAuthenticationSlice,
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.email = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = actions
export default reducer