import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const UserBanned = () => {

    const navigate = useNavigate();
    const { logout } = useAuth0();

    const handleOnClick = () => {
        logout();
        navigate('/');
    }

    return(
        <div>
            <p>Tu usuario ha sido banneado del sitio.</p>
            <button onClick={handleOnClick}>Volver al inicio</button>
        </div>
    )
}

export default UserBanned;