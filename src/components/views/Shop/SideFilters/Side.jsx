import style from "./SideStyle.module.css"
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import Accordion from 'react-bootstrap/Accordion';

const Side = () => {

    const [marcas, setMarcas] = useState([]);

    const { productSee } = useSelector(state => state.products);

    useEffect(() => {

        let mapeoMarcas = () => {
            let almacen = [];

            for (let i = 0; i < productSee.length; i++) {

                if (!almacen.includes(productSee[i].brand)) {
                    almacen.push(productSee[i].brand);
                }
            }
            console.log(almacen);
            return almacen;
        }

        setMarcas(mapeoMarcas)
    }, [productSee]);



    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Marcas</Accordion.Header>
                <Accordion.Body>
                    <div className={style.contLi}>
                        {marcas.map((base) => {
                            return (
                                <div className={style.listDispatch}>
                                    <Form.Check aria-label="option 1" />
                                    <p>{base}</p>
                                </div>
                            );
                        })}

                    </div>
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    )

}

export default Side;

