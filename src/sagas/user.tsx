import {
  addUser,
  editUser,
  updateUser,
  deleteUser
} from "../features/users/userSlice";
import { put, takeEvery } from "redux-saga/effects";
import {
  ADD_USER,
  DELETE_USER_BY_ID,
  UPDATE_USERS,
  EDIT_USER_BY_ID
} from "../types/types";

export function* getUsers() {
  const users = JSON.parse(localStorage.getItem("users"));
  yield put(updateUser(users));
}
// watcher saga
export function* getUsersSaga() {
  yield takeEvery(UPDATE_USERS, getUsers);
}

export function* addUsers(action) {
  yield put(addUser(action.users));
}
export function* addUsersSaga() {
  yield takeEvery(ADD_USER, addUsers);
}

export function* editUsers(action) {
  yield put(editUser(action.user));
}
export function* editUsersSaga() {
  yield takeEvery(EDIT_USER_BY_ID, editUsers);
}

export function* deleteUserById(action) {
  yield put(deleteUser(action.id));
}
export function* deleteUserByIdSaga() {
  yield takeEvery(DELETE_USER_BY_ID, deleteUserById);
}
