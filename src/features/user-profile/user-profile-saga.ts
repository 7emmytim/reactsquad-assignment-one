import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchUserProfileFailure,
  fetchUserProfileRequest,
  fetchUserProfileSuccess
} from "./user-profile-reducer";
import { fetchUserProfileApi } from "./user-profile.api";

// --- HANDLER ---
function* handleFetchUserProfile(): Generator {
  try {
    const data = yield call(fetchUserProfileApi)
    yield put(fetchUserProfileSuccess(data))
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";

    yield put(fetchUserProfileFailure(message));
  }
}

// --- WATCHER ---
export function* watchFetchUserProfile() {
  yield takeEvery(fetchUserProfileRequest.type, handleFetchUserProfile);
}
