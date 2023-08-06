import { all } from "redux-saga/effects";
import {
  getUsersSagaWatcher,
  addUsersSagaWatcher,
  editUsersSagaWatcher,
  deleteUserByIdSagaWatcher,
  clearListSagaWatcher
} from "./user";
import { getListSagaWatcher } from "./list";

// Export all sagas
export default function* rootSaga() {
  yield all([
    getUsersSagaWatcher(),
    addUsersSagaWatcher(),
    editUsersSagaWatcher(),
    deleteUserByIdSagaWatcher(),
    clearListSagaWatcher(),
    getListSagaWatcher()
  ]);
}
