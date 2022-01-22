import { combineReducers, createStore, applyMiddleware } from "redux";
import getReducer from "../reducer/getReducer";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../../saga/saga";

const reducer = combineReducers({
  data: getReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
