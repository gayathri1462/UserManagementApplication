import * as React from "react";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducers";
import { configureStore } from "@reduxjs/toolkit";
import { render, RenderResult } from "@testing-library/react";
import { UserListScreen } from "./screens/userListScreen/UserListScreen";
import { AddUserScreen } from "./screens/addUserScreen/AddUserScreen";
import { NoDataScreen } from "./screens/noDataScreen/NoDataScreen";
import { Route, MemoryRouter, Routes } from "react-router-dom";
import { store } from "./redux/store";
import App from "./App";

test(`App can be rendered`, () => {
  const store = configureStore({ reducer: rootReducer });
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

const renderUserList = (): RenderResult =>
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/`]}>
        <Routes>
          <Route path="/" element={<NoDataScreen />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

const renderAddUser = (): RenderResult =>
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/adduser`]}>
        <Routes>
          <Route path="/adduser" element={<AddUserScreen />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

const renderViewUser = (): RenderResult =>
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/userlist/`]}>
        <Routes>
          <Route path="/userlist/" element={<UserListScreen />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

test("Render the User router page", () => {
  renderUserList();
});

test("Render the Add router page", () => {
  renderAddUser();
});

test("Render the View router page", () => {
  renderViewUser();
});
