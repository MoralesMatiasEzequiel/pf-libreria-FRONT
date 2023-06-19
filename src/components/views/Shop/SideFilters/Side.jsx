import style from "./SideStyle.module.css"

import Accordion from 'react-bootstrap/Accordion';

const Side = () => {


    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Marcas</Accordion.Header>
                <Accordion.Body>
                    <div className={style.contLi}>
                        <b>secso</b>
                        <b>mazorca</b>
                        <b>peron</b>
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