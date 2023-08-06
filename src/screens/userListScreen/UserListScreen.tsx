import React from "react";
import styles from "./UserListScreen.module.scss";
import { deleteUser } from "../../redux/reducers/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/types/types";
import { useNavigate } from "react-router-dom";
import { GrView } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { toast } from "react-toastify";

interface User {
  id: string;
  image: string;
  name: string;
  skills: string[];
  email: string;
}

export const UserListScreen = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const usersInfo = useAppSelector((store) => store.users);

  // useEffect(() => {
  //   dispatch(updateUser(usersInfo));
  // }, [usersInfo]);

  const handleRemoveUser = (id: string) => {
    dispatch(deleteUser({ id }));
    toast.success("User Removed Successfully");
  };

  return (
    <div className={styles.userListWrapper}>
      <table>
        <caption>
          <HiUsers />
          &nbsp;Users
        </caption>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Avatar</th>
            <th scope="col" colSpan={2}>
              Name
            </th>
            <th scope="col">Skills</th>
            <th scope="col" colSpan={3}>
              Email
            </th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersInfo?.map((user: User, index: number) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td data-label="Image">
                <img
                  src={user.image}
                  alt={user.name}
                  width={100}
                  height={100}
                />
              </td>
              <td data-label="Name" colSpan={2}>
                {user.name}
              </td>
              <td data-label="Skills">{user.skills?.join(", ")}</td>
              <td data-label="Email" colSpan={3}>
                {user.email}
              </td>
              <td data-label="Actions">
                <GrView
                  className={styles.iconStyling}
                  onClick={() => navigate(`/edituser/${user.id}`)}
                />{" "}
                &nbsp;
                <AiOutlineDelete
                  style={{ color: "#DF2E38" }}
                  className={styles.iconStyling}
                  onClick={() => handleRemoveUser(user.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
