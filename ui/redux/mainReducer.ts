import { combineReducers } from "redux";
import songsReducer from "./songs/reducer";

const rootReducer = combineReducers({
  songs: songsReducer,
});

export default rootReducer;