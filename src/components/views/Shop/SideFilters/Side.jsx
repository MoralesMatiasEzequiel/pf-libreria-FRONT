import style from "./SideStyle.module.css"
import Form from 'react-bootstrap/Form';
import { useEffect } from "react";
import { useSelector } from 'react-redux';

import Accordion from 'react-bootstrap/Accordion';

const Side = () => {


    const { productSee } = useSelector(state => state.products);

    useEffect(() => {

    }, []);

    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Marcas</Accordion.Header>
                <Accordion.Body>
                    <div className={style.contLi}>
                        {productSee.map((base) => {
                            return (
                                <div className={style.listDispatch}>
                                    <Form.Check aria-label="option 1" />
                                    <p>{base.brand}</p>
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

