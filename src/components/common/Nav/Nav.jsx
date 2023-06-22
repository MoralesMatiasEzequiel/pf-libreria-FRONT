import { NavLink } from "react-router-dom"
import style from "./Nav.module.css"
import logo from "./logo completo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getProducts } from "../../../redux/productActions";
import { useDispatch } from "react-redux";

const Navuno = () => {

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(getProducts());
    }

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

                        <Nav.Link eventKey={2} >
                            <NavLink to={""} className={style.navLink}>Ingresar / Registrarse</NavLink>
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


