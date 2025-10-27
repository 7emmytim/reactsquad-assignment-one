import { call, put, takeEvery } from "redux-saga/effects";
import { fetchUserProfileFailure, fetchUserProfileRequest, fetchUserProfileSuccess } from "./user-profile-reducer";

function* handleFetchData(): Generator<unknown> {
  try {
    const data = yield call(fetchDataApi)
    yield put(fetchUserProfileSuccess(data))
  } catch (error) {
    // const message = error.message
    yield put(fetchUserProfileFailure("Error"));
  }
}

export function* watchFetchUserProfileData() {
  yield takeEvery(fetchUserProfileRequest.type, handleFetchData);
}

export const fetchDataApi = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};
