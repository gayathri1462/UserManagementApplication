import { put, takeEvery } from "redux-saga/effects";
import {
  ADD_USER,
  DELETE_USER_BY_ID,
  EDIT_USER_BY_ID,
  CLEAR_LIST
} from "../types/types";

export function* addUsersSagaWorker(action) {
  const newUser = action.payload;
  yield put({ type: "ADD_USER", payload: newUser });
}

export function* addUsersSagaWatcher() {
  yield takeEvery(ADD_USER, addUsersSagaWorker);
}

export function* editUsersWorker(action) {
  const editedUser = action.payload;
  yield put({ type: "EDIT_USER_BY_ID", payload: editedUser });
}

export function* editUsersSagaWatcher() {
  yield takeEvery(EDIT_USER_BY_ID, editUsersWorker);
}

export function* deleteUserByIdSagaWorker(action) {
  const { id } = action.payload;
  yield put({ type: "DELETE_USER_BY_ID", payload: { id } });
}

export function* deleteUserByIdSagaWatcher() {
  yield takeEvery(DELETE_USER_BY_ID, deleteUserByIdSagaWorker);
}

export function* clearListSagaWorker() {
  yield put({ type: "CLEAR_LIST" });
}

export function* clearListSagaWatcher() {
  yield takeEvery(CLEAR_LIST, clearListSagaWorker);
}
