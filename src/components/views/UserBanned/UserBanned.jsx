import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import style from "./UserBanned.module.css"
import BlockedIMG from './blockedIMG.png';

const UserBanned = () => {

    const navigate = useNavigate();
    const { logout } = useAuth0();

    const handleOnClick = () => {
        logout();
        navigate('/');
    }

    return(
        <div className={style.container}>
            <h2>Tu usuario ha sido banneado del sitio.</h2>
            <img className={style.imgDev} src={BlockedIMG} alt="" />
            <button onClick={handleOnClick}>Volver al inicio</button>
        </div>
    )
}

export default UserBanned;