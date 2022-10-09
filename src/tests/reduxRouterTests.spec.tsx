import { render, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import UserList from "../features/users/UserList";
import AddUser from "../features/users/AddUser";
//import EditUser from "../features/users/EditUser";
import ViewUsers from "../features/users/ViewUsers";
import { Route, MemoryRouter, Routes } from "react-router-dom";
import { store } from "../store";

const renderUserList = (): RenderResult =>
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/`]}>
        <Routes>
          <Route path="/" element={<UserList />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

const renderAddUser = (): RenderResult =>
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/add-user`]}>
        <Routes>
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

/*const renderEditUser = (id: string): RenderResult =>
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/edit-user/${id}`]}>
        <Routes>
          <Route path="/edit-user/:id" element={<EditUser />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
*/

const renderViewUser = (): RenderResult =>
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/view-users/`]}>
        <Routes>
          <Route path="/view-users/" element={<ViewUsers />} />
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

/*test("Render the Edit router page", () => {
  renderEditUser("1");
}); */
