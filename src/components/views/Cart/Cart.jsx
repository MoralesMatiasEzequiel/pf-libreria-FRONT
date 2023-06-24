import React, { useState } from "react";
import style from "./Cart.module.css";
import { Link } from "react-router-dom";
import FormInfoCart from "./FormInfoCart";
import FormShipmentCart from "./FormShipmentCart";
import FormPayCart from "./FormPayCart";
import CartProducts from "../CartProducts/CartProducts"; 

const Cart = () => {

    const [ formInfo, setFormInfo ] = useState(true);
    const [ formShipment, setFormShipment ] = useState(false);
    const [ formPay, setFormPay ] = useState(false);

    return (
        <div className={style.container}>
            <div className={style.containerInfo}>
                <Link to={"/cart"} className={style.linkBack}>{"< Volver al carrito"}</Link> 
                <h5 className={style.title}>Tu librito - Librería & Papelería</h5>   
                <button className={style.boton} onClick={() => {setFormInfo(true); setFormShipment(false); setFormPay(false);}} disabled={formInfo}>Cliente</button>
                <button className={style.boton} onClick={() => {setFormInfo(false); setFormShipment(true); setFormPay(false);}} disabled={formShipment}>Envío</button>
                <button className={style.boton} onClick={() => {setFormInfo(false); setFormShipment(false); setFormPay(true);}} disabled={formPay}>Pago</button>
                <FormInfoCart state={formInfo}/>
                <FormShipmentCart state={formShipment}/>
                <FormPayCart state={formPay}/>
            </div>   
            <div className={style.containerSubTotal}>
                <h5>Resumen de la compra</h5> 
                <CartProducts />
            </div>
        </div>
    )

}

export default Cart;