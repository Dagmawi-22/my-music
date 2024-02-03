import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_SONGS_REQUEST,
  fetchSongsSuccess,
  fetchSongsFailure,
} from "./actions";

function* fetchSongsSaga() {
  try {
    const response = yield call(axios.get, "/api/songs");
    yield put(fetchSongsSuccess(response.data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* songsSaga() {
  yield takeLatest(FETCH_SONGS_REQUEST, fetchSongsSaga);
}

export default songsSaga;
