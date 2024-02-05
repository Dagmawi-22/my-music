import { configureStore, Action } from "@reduxjs/toolkit";
import { GetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./songSlice";
import rootSaga from "./saga";
import { SongState } from "../interfaces/Interface";

interface ExtendedPersistPartial {
  _persist: {
    version: number;
    rehydrated: boolean;
  };
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["songs"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer<
  SongState & ExtendedPersistPartial,
  Action<string>
>(persistConfig, rootReducer as any);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
