import { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { editUser } from "./userSlice";
import "../../styles/form.scss";
import { User, useAppDispatch, useAppSelector } from "../../types/types";

const EditUser = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const users = useAppSelector((store) => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter((user: User) => user.id === params.id);
  const { image, name, role, email }: User = existingUser[0];
  const [values, setValues] = useState({
    image,
    name,
    role,
    email
  });
  const [isReadonly, setIsReadonly] = useState(true);
  const [buttonText, setButtonText] = useState("Edit");
  const [isDisabled, setDisabled] = useState(true);

  const ToggleButton = () => {
    setDisabled(false);
    setIsReadonly(false);
    setButtonText("Save");
  };
  const handleEditUser = () => {
    if (buttonText === "Save") {
      setValues({ image: "", name: "", role: "", email: "" });

      dispatch(
        editUser({
          id: params.id,
          image: values.image,
          name: values.name,
          role: values.role,
          email: values.email
        })
      );
      navigate("/");
    }
  };

  return (
    <div className="Form">
      <Button
        id="toggle-button"
        label={buttonText}
        className="AddUserButton"
        onClick={() => {
          ToggleButton();
          handleEditUser();
        }}
      />
      <br />
      <InputField
        label="Upload your Image"
        inputProps={{ type: "file", placeholder: "Image" }}
        className="form__input Button"
        accept="image/*"
        disabled={isDisabled}
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
        value={values.name}
        //readOnly={isReadonly}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{
          type: "text",
          placeholder: "Full Name",
          readOnly: isReadonly
        }}
      />
      <br />
      <InputField
        className="form__input"
        label="Role"
        value={values.role}
        //readOnly={isReadonly}
        onChange={(e) => setValues({ ...values, role: e.target.value })}
        inputProps={{ type: "text", placeholder: "Role", readOnly: isReadonly }}
      />
      <br />
      <InputField
        className="form__input"
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{
          type: "email",
          placeholder: "Email",
          readOnly: isReadonly
        }}
      />

      <Link to="/">
        <Button label="Back" className="BackButton" />
      </Link>
    </div>
  );
};

export default EditUser;
