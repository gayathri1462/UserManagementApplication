import { useState } from "react";
//import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { addUser } from "./userSlice";
import { v4 as uuidv4 } from "uuid";
import { User, useAppDispatch } from "../../types/types";
import "../../styles/form.scss";

const AddUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState<User>({
    image: "",
    name: "",
    role: "",
    email: ""
  } as User);

  const handleAddUser = () => {
    setValues({ image: "", name: "", role: "", email: "" });
    dispatch(
      addUser({
        id: uuidv4(),
        image: values.image,
        name: values.name,
        role: values.role,
        email: values.email
      })
    );

    navigate("/");
  };

  return (
    <div className="Form">
      <InputField
        label="Upload your Image"
        inputProps={{ type: "file", placeholder: "Image" }}
        className="form__input Button"
        accept="image/*"
        onChange={(e) =>
          setValues({
            ...values,
            image: URL.createObjectURL(e.target.files[0])
          })
        }
      />
      <br />
      <img className="Image" src={values.image} alt={values.name} />
      <br />
      <InputField
        className="form__input"
        label="Name"
        inputProps={{ type: "text", placeholder: "Full Name" }}
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />
      <br />
      <InputField
        className="form__input"
        label="Role"
        value={values.role}
        onChange={(e) => setValues({ ...values, role: e.target.value })}
        inputProps={{ type: "text", placeholder: "Role" }}
      />
      <br />
      <InputField
        className="form__input"
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "Email" }}
      />
      <br />
      <Button
        label="Submit"
        className="AddUserButton"
        onClick={handleAddUser}
      />
      <Link to="/">
        <Button data-testid="back" label="Back" className="BackButton" />
      </Link>
    </div>
  );
};

export default AddUser;
