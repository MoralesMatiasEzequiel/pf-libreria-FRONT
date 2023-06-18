
import style from "./Filters.module.css"
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import { orderByAZ, orderByZA, orderPriceToLow, orderPriceToUp } from "../../../../redux/productActions";
import { useDispatch } from "react-redux";

const Filters = () => {

    const dispatch = useDispatch();

    const orderAZ = () => {
        dispatch(orderByAZ())
    }
    const orderZA = () => {
        dispatch(orderByZA())
    }
    const orderPriceLow = () => {
        dispatch(orderPriceToLow())
    }
    const orderPriceUp = () => {
        dispatch(orderPriceToUp())
    }

    return (
        <div>
            <div className={style.div}>

                <div className={style.nada}>

                </div>

                <Navbar >

                    <Container fluid>
                            <Nav className={style.orderres}>
                                <p className={style.order} >Ordenar por :</p>

                                <NavDropdown
                                    title="Nombre"
                                >
                                    <NavDropdown.Item onClick={orderAZ}>A - Z </NavDropdown.Item>

                                    <NavDropdown.Item onClick={orderZA}>Z - A </NavDropdown.Item>

                                </NavDropdown>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Precio"
                                >

                                    <NavDropdown.Item onClick={orderPriceLow}>Precio: Menor a mayor </NavDropdown.Item>

                                    <NavDropdown.Item onClick={orderPriceUp}>Precio: Mayor a menor </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                    </Container>
                </Navbar >
            </div>
        </div>
    )

}

export default Filters;