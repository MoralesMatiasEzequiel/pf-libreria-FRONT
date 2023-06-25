
import style from "./Filters.module.css"
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { orderByAZ, orderByZA, orderPriceToLow, orderPriceToUp } from "../../../../redux/productActions";


const Filters = () => {

    const dispatch = useDispatch();
    const { brandSelected, subCategories, pag, totalpages, productSee, products } = useSelector((state) => state.products);


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
    useEffect(() => {


    }, [pag, productSee, products]);

    return (
        <div>
            <div className={style.div}>

                <div className={style.nada}>
                    <div className={style.filtrs}>
                        {subCategories.length > 0 && brandSelected.length < 1 && <p className={style.tit}>Filtros :</p>}
                        {subCategories.length < 1 && brandSelected.length > 0 && <p className={style.tit}>Filtros :</p>}
                        {subCategories.length > 0 && brandSelected.length > 0 && <p className={style.tit}>Filtros :</p>}

                        {subCategories.length > 0 && <p>Por sub-categoria : <b>{subCategories}</b> </p>}

                        {brandSelected.length > 0 && <p> Por marca :{brandSelected.map(bra => {
                            return <b>{bra}</b>
                        })}</p>}
                    </div>
                    {/* <div className={style.pagi}>
                        <p>pag: {pag} - {totalpages}</p>
                    </div> */}
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
        </div >
    )

}

export default Filters;