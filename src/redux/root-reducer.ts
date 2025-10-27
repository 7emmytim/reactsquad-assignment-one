
import { userAuthenticationSlice, userProfileSlice } from "@/features";
import userAuthenticationReducer from "@/features/user-authentication/user-authentication-reducer";
import userProfileReducer from "@/features/user-profile/user-profile-reducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  [userAuthenticationSlice]: userAuthenticationReducer,
  [userProfileSlice]: userProfileReducer,
});

const rootState = rootReducer(undefined, { type: '' });

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, rootState };
