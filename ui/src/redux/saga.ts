import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  createSongStart,
  createSongSuccess,
  createSongFailure,
  updateSongStart,
  updateSongSuccess,
  updateSongFailure,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure,
} from "./songSlice";
import { Song } from "../interfaces/Interface";
import { API_BASE_URL } from "../config";

function* fetchSongs(): Generator<any, void, any> {
  try {
    const response = yield call(fetch, `${API_BASE_URL}`);
    const data: Song[] = yield call([response, "json"]);
    yield put(fetchSongsSuccess(data));
  } catch (error: any) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* createSong(action: {
  type: string;
  payload: Song;
}): Generator<any, void, any> {
  try {
    const response = yield call(fetch, `${API_BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    });

    if (response.ok) {
      const data: Song = yield call([response, "json"]);
      yield put(createSongSuccess(data));
    } else {
      const errorData = yield call([response, "json"]);
      throw new Error(errorData.message);
    }
  } catch (error: any) {
    yield put(createSongFailure(error.message));
  }
}

function* updateSong(action: {
  type: string;
  payload: Song;
}): Generator<any, void, any> {
  try {
    const response = yield call(fetch, `${API_BASE_URL}/${action.payload.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    });

    const data: Song = yield call([response, "json"]);
    yield put(updateSongSuccess(data));
  } catch (error: any) {
    yield put(updateSongFailure(error.message));
  }
}

function* deleteSong(action: {
  type: string;
  payload: number;
}): Generator<any, void, any> {
  try {
    const response = yield call(fetch, `${API_BASE_URL}/${action.payload}`, {
      method: "DELETE",
    });

    yield call([response, "json"]);
    yield put(deleteSongSuccess(action.payload));
  } catch (error: any) {
    yield put(deleteSongFailure(error.message));
  }
}

function* watchFetchSongs() {
  yield takeLatest(fetchSongsStart.type, fetchSongs);
}

function* watchCreateSong() {
  yield takeLatest(createSongStart.type, createSong);
}

function* watchUpdateSong() {
  yield takeLatest(updateSongStart.type, updateSong);
}

function* watchDeleteSong() {
  yield takeLatest(deleteSongStart.type, deleteSong);
}

export default function* rootSaga() {
  yield watchFetchSongs();
  yield watchCreateSong();
  yield watchUpdateSong();
  yield watchDeleteSong();
}
