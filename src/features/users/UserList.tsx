//import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { deleteUser, updateUser } from "./userSlice";
import "../../styles/styles.scss";
import { User, useAppDispatch, useAppSelector } from "../../types/types";

const UserList = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((store) => store.users);
  if (users.length === 0) {
    if (localStorage.getItem("users")) {
      const localData = JSON.parse(localStorage.getItem("users"));
      dispatch(updateUser(localData));
    }
  }
  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  const ToggleButton = (image, name, role, email) => {
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
          <th scope="col">Actions</th>
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
              {ToggleButton(user.image, user.name, user.role, user.email)}
            </td>
            <td data-label="Actions">
              <Link to={`edit-user/${user.id}`}>
                <Button label="View" className="ViewUserButton" />
              </Link>
              <Button
                label="Delete"
                className="DeleteUserButton"
                onClick={() => handleRemoveUser(user.id)}
              />
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );

  return (
    <div className="MainPageButtons">
      <Link to={`view-users/`}>
        <Button label="View All" className="viewall__button" />
      </Link>
      <div>{users.length ? renderCard() : <h3>No User</h3>}</div>
    </div>
  );
};

export default UserList;
