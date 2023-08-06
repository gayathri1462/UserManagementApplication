import "./App.css";
import { BaseScreen } from "./screens/baseScreen/BaseScreen";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { UserListScreen } from "./screens/userListScreen/UserListScreen";
import { AddUserScreen } from "./screens/addUserScreen/AddUserScreen";
import { NoDataScreen } from "./screens/noDataScreen/NoDataScreen";
import { useAppSelector } from "./redux/types/types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const usersInfo = useAppSelector((state) => state.users);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<BaseScreen />}>
            <Route
              path="/"
              element={
                !usersInfo?.length ? <NoDataScreen /> : <UserListScreen />
              }
            />
            <Route path="/userlist" element={<UserListScreen />} />
            <Route path="/adduser" element={<AddUserScreen />} />
            <Route path="/edituser/:id" element={<AddUserScreen />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        draggable={false}
        rtl={false}
      />
    </div>
  );
}
