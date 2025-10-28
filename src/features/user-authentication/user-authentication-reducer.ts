import { createSlice } from "@reduxjs/toolkit";

export const slice = "userAuthentication"
const initialState: {
  email: string | null;
  isAuthenticated: boolean
} = { email: null, isAuthenticated: false }

export const {
  actions,
  reducer,
} = createSlice({
  name: slice,
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
export const userAuthenticationSlice = slice
export default reducer