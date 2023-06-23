import { NavLink } from "react-router-dom"
import style from "./Nav.module.css"
import logo from "./logo completo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getProducts } from "../../../redux/productActions";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const Navuno = () => {

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(getProducts());
    }

    const { isAuthenticated } = useAuth0();

    const profileLink = isAuthenticated ? (
        <NavLink to={"/profile"} className={style.navLink}>Perfil</NavLink>
    ) : (
        <NavLink to={"/login"} className={style.navLink}>Ingresar</NavLink>
    );

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand >
                    <NavLink to={"/"}>
                        <img className={style.logo} src={logo} alt="" />
                    </NavLink>

                </Navbar.Brand>


                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2}>
                            <NavLink to={"/shop"} className={style.navLink} onClick={() => onClick()}>Tienda</NavLink>
                        </Nav.Link>

                        <Nav.Link eventKey={2}>
                            <NavLink to={"/about"} className={style.navLink}>Contacto</NavLink>
                        </Nav.Link>

                        <Nav.Link eventKey={2}>
                            {profileLink}
                        </Nav.Link>

                        <Nav.Link eventKey={2}>
                            <NavLink to={"/cart"} className={style.navLink}>Carrito</NavLink>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>


    )

}

export default Navuno;


