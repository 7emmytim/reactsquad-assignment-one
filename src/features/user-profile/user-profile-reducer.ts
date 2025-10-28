import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProfile } from "./user-profile-api";

export const userProfileSlice = 'userProfile';

const initialState: {
  data: UserProfile | null
  isLoading: boolean;
  error: string | null
} = {
  data: null,
  isLoading: false,
  error: null,
};

const { actions, reducer } = createSlice({
  name: userProfileSlice,
  initialState,
  reducers: {
    fetchUserProfileRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchUserProfileSuccess: (state, action: PayloadAction<UserProfile>) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchUserProfileFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUserProfileRequest,
  fetchUserProfileSuccess,
  fetchUserProfileFailure
} = actions
export default reducer