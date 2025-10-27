import { createSlice } from "@reduxjs/toolkit";

interface UserProfile {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  },
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

const slice = 'userProfile';

const initialState: {
  data: UserProfile | null
  isLoading: boolean;
  error: string | null
} = {
  data: null,
  isLoading: false,
  error: null,
};

export const { actions, reducer } = createSlice({
  name: slice,
  initialState,
  reducers: {
    fetchUserProfileRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchUserProfileSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchUserProfileFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUserProfileRequest, fetchUserProfileSuccess, fetchUserProfileFailure } = actions;
export default reducer;
export const userProfileSlice = slice