import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song, SongState } from "../interfaces/Interface";

const initialState: SongState = {
  songs: [],
  stats: {},
  loading: false,
  error: null,
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    startLoading(state) {
      state.loading = true;
      state.error = null;
    },
    finishLoading(state) {
      state.loading = false;
    },
    setError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    resetState(state) {
      state.loading = false;
      state.error = null;
    },
    fetchSongsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSongsSuccess(
      state,
      action: PayloadAction<{ songs: Song[]; stats: any }>
    ) {
      state.loading = false;
      state.songs = action.payload.songs;
      state.stats = action.payload.stats;
    },
    fetchSongsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    createSongStart(state, action: PayloadAction<Song>) {
      console.log("creating a song");
      state.loading = true;
      state.error = null;
    },
    createSongSuccess(
      state,
      action: PayloadAction<{ song: Song; stats: any }>
    ) {
      state.loading = false;
      if (state.songs) {
        state.songs.push(action.payload.song);
      }
      state.stats = action.payload.stats;
    },
    createSongFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    updateSongStart(state, action: PayloadAction<Song>) {
      console.log("updating a song");
      state.loading = true;
      state.error = null;
    },
    updateSongSuccess(state, action: PayloadAction<Song>) {
      state.loading = false;
      if (state.songs) {
        const updatedIndex = state.songs.findIndex(
          (song) => song.id === action.payload.id
        );
        if (updatedIndex !== -1) {
          state.songs[updatedIndex] = action.payload;
        }
      }
    },
    updateSongFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteSongStart(state, action: PayloadAction<object>) {
      console.log("deleting a song");
      state.loading = true;
      state.error = null;
    },
    deleteSongSuccess(state, action: PayloadAction<number>) {
      state.loading = false;
      if (state.songs) {
        state.songs = state.songs.filter((song) => song.id !== action.payload);
      }
    },
    deleteSongFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  startLoading,
  finishLoading,
  setError,
  resetState,
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
} = songSlice.actions;

export default songSlice.reducer;
