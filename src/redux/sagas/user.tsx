import {
  addUser,
  editUser,
  updateUser,
  deleteUser,
  clearList
} from "../reducers/userSlice";
import { put, takeEvery, select } from "redux-saga/effects";
import {
  ADD_USER,
  DELETE_USER_BY_ID,
  UPDATE_USERS,
  EDIT_USER_BY_ID,
  CLEAR_LIST
} from "../types/types";

export function* getUsersSagaWorker() {
  const { users } = yield select((state) => state);
  yield put(updateUser(users));
}
// watcher saga
export function* getUsersSagaWatcher() {
  yield takeEvery(UPDATE_USERS, getUsersSagaWorker);
}

export function* addUsersSagaWorker(action) {
  const newUser = action.payload;
  yield put(addUser(newUser));
}

export function* addUsersSagaWatcher() {
  yield takeEvery(ADD_USER, addUsersSagaWorker);
}

export function* editUsersWorker(action) {
  const editedUser = action.payload;
  yield put(editUser(editedUser));
}

export function* editUsersSagaWatcher() {
  yield takeEvery(EDIT_USER_BY_ID, editUsersWorker);
}

export function* deleteUserByIdSagaWorker(action) {
  const { id } = action.payload;
  yield put(deleteUser(id));
}

export function* deleteUserByIdSagaWatcher() {
  yield takeEvery(DELETE_USER_BY_ID, deleteUserByIdSagaWorker);
}

export function* clearListSagaWorker() {
  yield put(clearList());
}

export function* clearListSagaWatcher() {
  yield takeEvery(CLEAR_LIST, clearListSagaWorker);
}
