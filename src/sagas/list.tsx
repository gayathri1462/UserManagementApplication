import { viewList } from "../features/users/listSlice";
import { put, takeEvery } from "redux-saga/effects";
import { VIEW_LIST } from "../types/types";

export function* getListSaga() {
  const users = JSON.parse(localStorage.getItem("users"));
  yield put(viewList(users));
}

export function* watchUsersAsync() {
  yield takeEvery(VIEW_LIST, getListSaga);
}
