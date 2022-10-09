import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import usersReducer from "./features/users/userSlice";
import listsReducer from "./features/users/listSlice";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./sagas";
export const rootReducer = combineReducers({
  users: usersReducer,
  lists: listsReducer
});

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
