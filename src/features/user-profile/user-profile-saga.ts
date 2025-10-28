import { call, put, takeEvery } from "redux-saga/effects";
import { fetchUserProfileApi } from "./user-profile-api";
import {
  fetchUserProfileFailure,
  fetchUserProfileRequest,
  fetchUserProfileSuccess
} from "./user-profile-reducer";

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
