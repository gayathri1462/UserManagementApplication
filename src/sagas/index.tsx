import { all } from "redux-saga/effects";
import {
  getUsersSaga,
  addUsersSaga,
  editUsersSaga,
  deleteUserByIdSaga
} from "./user";
import { watchUsersAsync } from "./list";
/*export function* rootSaga() {
  yield all([watchUsersAsync()]);
} */

// Export all sagas
export function* rootSaga() {
  yield all([
    getUsersSaga(),
    addUsersSaga(),
    editUsersSaga(),
    deleteUserByIdSaga(),
    watchUsersAsync()
  ]);
}
