import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import ProfileData from "./ProfileData";
import styles from "./ProfileData.module.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { logout, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className={styles.primcipalContainer}>
			
      <ProfileData />
      
			<Link to={"/favorites"} >
        <button className={styles.favoriteBtn}>Lista de favoritos</button>
      </Link>
			<br/>
      <button
        className={styles["logout-button"]}
        onClick={() => {
          logout();
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Profile;
