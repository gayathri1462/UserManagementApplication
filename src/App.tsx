import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./features/users/AddUser";
import EditUser from "./features/users/EditUser";
import UserList from "./features/users/UserList";
import ViewUsers from "./features/users/ViewUsers";
import { Header } from "./components/Header";
//import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./features/users/userSlice";
import { useAppSelector, useAppDispatch } from "./types/types";

const App = () => {
  const dispatch = useAppDispatch();
  const StateData = useAppSelector((state) => state.users);
  if (StateData.length === 0) {
    if (localStorage.getItem("users")) {
      const localData = JSON.parse(localStorage.getItem("users"));
      dispatch(updateUser(localData));
    }
  }

  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="/view-users/" element={<ViewUsers />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};
export default App;
