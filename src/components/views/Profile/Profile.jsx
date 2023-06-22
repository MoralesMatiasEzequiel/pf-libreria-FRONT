import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

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
            <p>ESTE ES TU PERFIL DE USUARIO MAMITA</p>
            <button onClick={() => {logout()}}>Log Out</button>
        </div>
    )

}

export default Profile;