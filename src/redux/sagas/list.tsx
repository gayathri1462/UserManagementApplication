//Only for reference of using multiple sagas
import { viewList } from "../reducers/listSlice";
import { put, takeEvery, select } from "redux-saga/effects";
import { VIEW_LIST } from "../types/types";

export function* getListSagaWorker() {
  const users = yield select((state) => state.userlist);
  yield put(viewList(users));
}

export function* getListSagaWatcher() {
  yield takeEvery(VIEW_LIST, getListSagaWorker);
}
