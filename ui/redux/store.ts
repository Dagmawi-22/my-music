import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import mainReducer from "./mainReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
