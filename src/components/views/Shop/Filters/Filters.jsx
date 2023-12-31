
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
    const { brandSelected, subCategories, pag, totalpages, productSee, products, productsExist } = useSelector((state) => state.products);


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
            <div className={style.totalContainer}>

                <div className={style.nada}>
                    <div className={style.filtrs}>
                        {subCategories.length > 0 && brandSelected.length < 1 && <p className={style.tit}>Filtros :</p>}
                        {subCategories.length < 1 && brandSelected.length > 0 && <p className={style.tit}>Filtros :</p>}
                        {subCategories.length > 0 && brandSelected.length > 0 && <p className={style.tit}>Filtros :</p>}

                        {subCategories.length > 0 && <p className={style.tit}>Por sub-categoria: <b>{subCategories}</b> </p>}

                        {brandSelected.length > 0 && <p className={style.tit}> Por marca:{brandSelected.map(bra => {
                            return <b>{bra}</b>
                        })}</p>}
                    </div>
                    {/* <div className={style.pagi}>
                        <p>pag: {pag} - {totalpages}</p>
                    </div> */}
                </div>

                {
                    productsExist && <Navbar >
                    <Container fluid>
                        <Nav className={style.orderres}>
                            <p className={style.order} >Ordenar por:</p>

                            <NavDropdown title="Nombre">
                                <NavDropdown.Item className="custom-item" onClick={orderAZ}>A - Z</NavDropdown.Item>
                                <NavDropdown.Item className="custom-item" onClick={orderZA}>Z - A</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Precio">
                                <NavDropdown.Item className="custom-item" onClick={orderPriceLow}>Menor a mayor</NavDropdown.Item>
                                <NavDropdown.Item className="custom-item" onClick={orderPriceUp}>Mayor a menor</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Container>
                </Navbar >
                }
                
            </div>
    )

}

export default Filters;