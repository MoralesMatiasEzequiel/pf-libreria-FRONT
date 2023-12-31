import { NavLink } from "react-router-dom"
import style from "./Nav.module.css"
import logo from "./logo completo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getProducts } from "../../../redux/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { newCart } from "../../../redux/CartActions";

const Navuno = () => {

    const { productsOnCart } = useSelector(state => state.cart)

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(getProducts());
    }

    const { isAuthenticated } = useAuth0();
    const { currentUser } = useSelector(state => state.user);

    // COLORES PARA POSICIONAMIENTO EN EL NAV
    const [ colorTienda, setColorTienda ] = useState("")
    const [ colorContacto, setColorContacto ] = useState("")
    const [ colorLog, setColorLog ] = useState("")
    const [ colorCarrito, setColorCarrito ] = useState("")
    // COLORES PARA POSICIONAMIENTO EN EL NAV

    const profileLink = isAuthenticated ? (
        <NavLink style={{color: `${colorLog}`}} to={"/profile"} className={style.navLink} onClick={() => changeColor("log")}><img src={currentUser?.picture} alt={currentUser?.name}/></NavLink>
    ) : (
        <NavLink style={{color: `${colorLog}`}} to={"/login"} className={style.navLink} onClick={() => changeColor("log")}>Ingresar</NavLink>
    );

    const changeColor = (name) => {
        if(name === "home"){
            setColorTienda("")
            setColorContacto("")
            setColorLog("")
            setColorCarrito("")
        } 
        if(name === "tienda"){
            setColorTienda("orange")
            setColorContacto("")
            setColorLog("")
            setColorCarrito("")
        } 
        if(name === "contacto"){
            setColorContacto("orange")
            setColorTienda("")
            setColorLog("")
            setColorCarrito("")
        } 
        if(name === "log"){
            setColorTienda("")
            setColorContacto("")
            setColorLog("orange")
            setColorCarrito("")
        } 
        if(name === "carrito"){
            setColorTienda("")
            setColorContacto("")
            setColorLog("")
            setColorCarrito("orange")
        } 
    }

    useEffect(() => {
        let data = localStorage.getItem("protucts_cart");
        let cart = JSON.parse(data)
        if (cart?.length > 0 && productsOnCart.length < 1) {
            dispatch(newCart(cart))
        }
    }, [])

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand >
                    <NavLink to={"/"} onClick={() => changeColor("home")}>
                        <img className={style.logo} src={logo} alt="" />
                    </NavLink>

                </Navbar.Brand>


                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2}>
                            <NavLink style={{color: `${colorTienda}`}} to={"/shop"} className={style.navLink} onClick={() => {onClick(); changeColor("tienda")}}>Tienda</NavLink>
                        </Nav.Link>

                        <Nav.Link eventKey={2}>
                            <NavLink style={{color: `${colorContacto}`}} to={"/about"} className={style.navLink} onClick={() => changeColor("contacto")}>Contacto</NavLink>
                        </Nav.Link>

                        <Nav.Link eventKey={2}>
                            {profileLink}
                        </Nav.Link>

                        <Nav.Link eventKey={2}>
                            <NavLink style={{color: `${colorCarrito}`}} to={"/cart"} className={style.navLink} onClick={() => changeColor("carrito")}>Carrito ({productsOnCart.length})</NavLink>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>


    )

}

export default Navuno;


