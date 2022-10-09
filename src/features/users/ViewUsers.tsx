//import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { viewList } from "./listSlice";
import { User, useAppDispatch, useAppSelector } from "../../types/types";
import "../../styles/styles.scss";

const ViewUsers = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((store) => store.users);
  if (users.length === 0) {
    if (localStorage.getItem("users")) {
      const localData = JSON.parse(localStorage.getItem("users"));
      dispatch(viewList(localData));
    }
  }
  const ToggleText = (image, name, role, email) => {
    if (image === "" || name === "" || role === "" || email === "") {
      return "Draft";
    } else {
      return "Saved";
    }
  };
  const renderCard = () => (
    <table>
      <caption>USERS</caption>
      <thead>
        <tr>
          <th scope="col">Avatar</th>
          <th scope="col">Name</th>
          <th scope="col">Role</th>
          <th scope="col">Email</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      {users.map((user: User) => (
        <tbody key={user.id}>
          <tr>
            <td data-label="Image">
              <img src={user.image} alt={user.name} width="80px" />
            </td>
            <td data-label="Name">{user.name}</td>
            <td data-label="Role">{user.role}</td>
            <td data-label="Email">{user.email}</td>
            <td data-label="Status">
              {ToggleText(user.image, user.name, user.role, user.email)}
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );

  return (
    <div>
      <br />
      <Link to={"/"}>
        <Button label="Back" className="BackButton" />
      </Link>
      <div>{users.length ? renderCard() : <h3>No User</h3>}</div>
    </div>
  );
};

export default ViewUsers;
