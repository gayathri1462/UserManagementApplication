import { Link } from "react-router-dom";
import Button from "./Button";
import "../styles/styles.scss";
export const Header = () => {
  return (
    <nav className="header">
      <div>
        <h1 className="header__title">User Management</h1>
      </div>
      <Link to="/add-user">
        <Button label="Add User" className="add__button" />
      </Link>
    </nav>
  );
};
