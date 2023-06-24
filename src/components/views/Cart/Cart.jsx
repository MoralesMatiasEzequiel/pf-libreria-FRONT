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

    const handleFormInfoClick = () => {
        setFormInfo(true);
        setFormShipment(false);
        setFormPay(false);
      };
    
      const handleFormShipmentClick = () => {
        setFormInfo(false);
        setFormShipment(true);
        setFormPay(false);
      };
    
      const handleFormPayClick = () => {
        setFormInfo(false);
        setFormShipment(false);
        setFormPay(true);
      };

    return (
        <div className={style.container}>
            <div className={style.containerInfo}>
                <Link to={"/cart"} className={style.linkBack}>{"< Volver al carrito"}</Link> 
                <h5 className={style.title}>Tu librito - Librería & Papelería</h5>   
                <button
                    className={style.boton}
                    onClick={handleFormInfoClick}
                    disabled={formInfo}
                >Cliente</button>
                <button 
                    className={style.boton}
                    onClick={handleFormShipmentClick}
                    disabled={formShipment}
                >Envío</button>
                <button 
                    className={style.boton}
                    onClick={handleFormPayClick}
                    disabled={formPay}
                >Pago</button>
                <FormInfoCart state={formInfo} setFormInfo={setFormInfo} setFormShipment={setFormShipment} setFormPay={setFormPay}/>
                <FormShipmentCart state={formShipment} setFormInfo={setFormInfo} setFormShipment={setFormShipment} setFormPay={setFormPay} />
                <FormPayCart state={formPay} setFormInfo={setFormInfo} setFormShipment={setFormShipment} setFormPay={setFormPay}/>
            </div>   
            <div className={style.containerSubTotal}>
                <h5>Resumen de la compra</h5> 
                <CartProducts />
            </div>
        </div>
    )

}

export default Cart;