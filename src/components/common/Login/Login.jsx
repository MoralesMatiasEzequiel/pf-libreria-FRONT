import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const Login = () => {


    const navigate = useNavigate();
    const { isAuthenticated, loginWithPopup } = useAuth0();

    useEffect(() => {
        if (!isAuthenticated) {
            loginWithPopup();
            navigate("/")
        } else { navigate("/"); }
      }, [isAuthenticated, navigate]);

    return(
        <></>
    )

}

export default Login;