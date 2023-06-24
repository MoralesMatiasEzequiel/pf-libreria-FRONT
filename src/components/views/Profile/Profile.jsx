import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import ProfileData from "./ProfileData";
import styles from "./ProfileData.module.css"

const Profile = () => {

    const navigate = useNavigate();
    const { logout, isAuthenticated } = useAuth0();

    useEffect(() => {
        if (!isAuthenticated) {
          navigate("/");
        }
      }, [isAuthenticated, navigate]);

    return(
        <div>
            <ProfileData />
            <button className={styles["logout-button"]} onClick={() => {logout()}}>Log Out</button>
        </div>
    )

}

export default Profile;