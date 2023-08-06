import styles from "./NoDataScreen.module.scss";
import mainLogo from "../../assets/mainLogo.jpg";
import { useNavigate } from "react-router-dom";

export const NoDataScreen = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.noDataScreenWrapper}>
      <div className={styles.logoWrapper}>
        <img src={mainLogo} alt="" width="300" height="400" />
      </div>
      <div className={styles.headersWrapper}>
        <h1>UserFlow</h1>
        <h2>Seamlessly Manage Users</h2>
        <button onClick={() => navigate("/adduser")}>
          Building bridges, one user at a time. Let's start!
        </button>
      </div>
    </div>
  );
};
