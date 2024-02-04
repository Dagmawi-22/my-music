import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import songSlice from "./songSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["songs"],
};

const { reducer: songReducer } = songSlice;

const persistedReducer = persistReducer(persistConfig, songReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
