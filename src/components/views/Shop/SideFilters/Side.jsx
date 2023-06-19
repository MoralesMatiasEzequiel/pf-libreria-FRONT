import style from "./SideStyle.module.css"
import Form from 'react-bootstrap/Form';

import Accordion from 'react-bootstrap/Accordion';

const Side = () => {


    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Marcas</Accordion.Header>
                <Accordion.Body>
                    <div className={style.contLi}>
                        <div className={style.listDispatch}>
                            <Form.Check aria-label="option 1" />
                            <b>secso</b>
                        </div>

                        <div className={style.listDispatch}>
                            <Form.Check aria-label="option 1" />
                            <b>mazorca</b>
                        </div>

                        <div className={style.listDispatch}>
                            <Form.Check aria-label="option 1" />
                            <b>peron</b>
                        </div>


                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>ZOOLOGICO</Accordion.Header>
                <Accordion.Body>
                    <div className={style.contLi}>
                        <b>Matias</b>
                        <b>Gatitos mimosos</b>
                        <b>Spidermans</b>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )

}

export default Side;

