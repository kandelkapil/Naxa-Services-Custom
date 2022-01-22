import { call, put } from "redux-saga/effects";
import { getApiData } from "../request/data";
import { setData } from "../../redux/reducer/getReducer";
export function* handleGetData(action) {
  try {
    const response = yield call(getApiData);
    const { data } = response;
    yield put(setData(data));
  } catch (error) {
    console.log(error);
  }
}
