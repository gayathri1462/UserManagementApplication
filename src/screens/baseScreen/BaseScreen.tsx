import { useNavigate, Outlet, useLocation } from "react-router-dom";
import styles from "./BaseScreen.module.scss";
import { Button } from "../../components/button/Button";
import { useAppDispatch, useAppSelector } from "../../redux/types/types";
import { clearList } from "../../redux/reducers/userSlice";
import { toast } from "react-toastify";

export const BaseScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const usersInfo = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const handleClearAllData = () => {
    dispatch(clearList());
    navigate("/");
    toast.success("Users Data Cleared Successfully");
  };

  return (
    <div className={styles.baseScreenWrapper}>
      {location.pathname !== "/" || usersInfo?.length ? (
        <div className={styles.headerDiv}>
          <div className={styles.headerLabel}>Userflow </div>
          <div className={styles.headerBtn}>
            <Button
              label="Clear All Data"
              onClick={handleClearAllData}
              extraClass={styles.extraClearBtnStyling}
            />
            <Button
              label="+ Add User"
              onClick={() => navigate("/adduser")}
              extraClass={styles.extraAddBtnStyling}
            />
          </div>
        </div>
      ) : null}
      <div className={styles.outletWrapper}>
        <Outlet />
      </div>
    </div>
  );
};
