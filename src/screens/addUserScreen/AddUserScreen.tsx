import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/types/types";
import { addUser, editUser } from "../../redux/reducers/userSlice";
import { v4 as uuidv4 } from "uuid";
import { UploadPicture } from "../../components/uploadPicture/UploadPicture";
import { InputBox } from "../../components/inputBox/InputBox";
import { InputTags } from "../../components/inputTags/InputTags";
import { Button } from "../../components/button/Button";
import styles from "./AddUserScreen.module.scss";
import { BiArrowBack } from "react-icons/bi";
import { toast } from "react-toastify";

interface User {
  id: string;
  image: string;
  name: string;
  skills: string[];
  email: string;
}

interface Error {
  image: string;
  name: string;
  skills: string;
  email: string;
}

export const AddUserScreen = () => {
  const navigate = useNavigate();
  const usersInfo = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const params = useParams();

  const [userData, setUserData] = useState<User>({
    id: "",
    image: "",
    name: "",
    skills: [],
    email: ""
  });

  const [errorData, setErrorData] = useState({
    image: "",
    name: "",
    skills: "",
    email: ""
  });

  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const [isEditPage, setIsEditPage] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const skillRef = useRef<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserData({
      ...userData,
      [e.target.name]: value
    });
  };

  const handleSkillsChange = (skills: string[]) => {
    setUserData({ ...userData, skills: skills });
  };

  const handleFileChangeDelete = () => {
    setUserData({ ...userData, image: "" });
  };

  const handleFileChangeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) {
      return;
    }

    if (!selectedFile.type.startsWith("image/")) {
      setUserData({ ...userData, image: "" });
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onload = (event) => {
      setUserData({
        ...userData,
        image: event.target?.result?.toString() || ""
      });
    };
  };

  const handleAddUser = () => {
    setIsSaveClicked(true);
    // Check if there are any errors
    if (
      errorData.image ||
      errorData.name ||
      errorData.email ||
      errorData.skills
    ) {
      console.log("There are errors. Cannot add user.");
      return; // Do not dispatch the action if there are errors
    }

    if (isEditPage && !isDisabled) {
      dispatch(
        editUser({
          id: userData.id,
          image: userData.image,
          name: userData.name,
          skills: userData.skills,
          email: userData.email
        })
      );
      toast.success("User Updated Successfully");
    } else {
      dispatch(
        addUser({
          // id: usersInfo.length + 1,
          id: uuidv4(),
          image: userData.image,
          name: userData.name,
          skills: userData.skills,
          email: userData.email
        })
      );
      toast.success("User Added Successfully");
    }
    navigate("/");
    setUserData({
      id: "",
      image: "",
      name: "",
      skills: [],
      email: ""
    });
    setErrorData({ image: "", name: "", skills: "", email: "" });
    setIsSaveClicked(false);
  };

  const ToggleButton = () => {
    setIsDisabled((prev) => !prev);
  };

  useEffect(() => {
    const newErrorData: Error = { image: "", name: "", email: "", skills: "" };
    let emailPattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    if (!userData?.image || userData.image.length < 1) {
      newErrorData.image = "Please upload  valid image";
    }

    if (!userData?.name || userData.name.length < 1) {
      newErrorData.name = "Please enter a valid user name";
    }

    if (
      !userData?.email ||
      userData.email.length < 1 ||
      !emailPattern.test(userData.email)
    ) {
      newErrorData.email = "Please enter a valid user email";
    }

    if (!userData?.skills || userData.skills.length < 2) {
      newErrorData.skills = "Please enter at least two skills";
    }
    console.log(newErrorData);
    setErrorData(newErrorData);
  }, [userData, isSaveClicked]);

  useEffect(() => {
    if (location.pathname?.includes("edituser")) {
      setIsEditPage(true);
      setIsDisabled(true);
      const existingUser = usersInfo?.filter(
        (user: User) => user.id === params.id
      );
      setUserData(existingUser?.[0]);
    } else {
      setUserData({
        id: "",
        image: "",
        name: "",
        skills: [],
        email: ""
      });
      setErrorData({ image: "", name: "", skills: "", email: "" });
      setIsSaveClicked(false);
      setIsDisabled(false);
      setIsEditPage(false);
    }
  }, [location.pathname, params, usersInfo]);

  return (
    <div className={styles.addUserWrapper}>
      <div className={styles.adderUserCard}>
        <div className={styles.btnDiv}>
          <div className={styles.backBtnDiv} onClick={() => navigate("/")}>
            <BiArrowBack className={styles.arrowIcon} />
            <div className={styles.backTextStyling}>Back </div>
          </div>
          {isEditPage && (
            <div>
              <Button
                label={
                  !isDisabled ? "Switch To View Mode" : "Switch To Edit Mode"
                }
                extraClass={styles.editBtnStyling}
                onClick={ToggleButton}
              />
            </div>
          )}
        </div>

        <div>
          <UploadPicture
            handleDeleteFunc={handleFileChangeDelete}
            handleFileUploadFunc={handleFileChangeUpload}
            picture={userData?.image}
            errorMsg={isSaveClicked && errorData?.image}
            disabled={isEditPage && isDisabled}
          />
        </div>
        <div className={styles.topInputDiv}>
          <InputBox
            inputId="userName"
            inputType="text"
            placeholderText="Enter User Name"
            labelText="Name"
            inputValue={userData?.name}
            handleChange={handleInputChange}
            inputProps={{ name: "name", readOnly: isEditPage && isDisabled }}
            errorMsg={isSaveClicked && errorData?.name}
          />
          <InputBox
            inputId="userEmail"
            inputType="email"
            placeholderText="Enter User Email"
            labelText="Email"
            inputValue={userData?.email}
            handleChange={handleInputChange}
            inputProps={{ name: "email", readOnly: isEditPage && isDisabled }}
            errorMsg={isSaveClicked && errorData?.email}
          />
        </div>
        <InputTags
          ref={skillRef}
          selectedTags={handleSkillsChange}
          tags={userData.skills}
          label="Skills (Add Upto 10 skills)"
          errorMsg={isSaveClicked && errorData?.skills}
          disabled={isEditPage && isDisabled}
          placeholder="Enter Skills"
        />
        <div className={styles.buttonDiv}>
          {!isDisabled && (
            <Button
              label={"Save"}
              onClick={handleAddUser}
              extraClass={styles.extraBtnStyling}
            />
          )}
        </div>
      </div>
    </div>
  );
};
