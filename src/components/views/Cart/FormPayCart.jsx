import React from "react";
import style from "./FormPayCart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, sendOrder } from "../../../redux/CartActions";
import { useEffect } from "react";


const FormPayCart = ({ state, setFormInfo, setFormShipment, setFormPay }) => {

    const dispatch = useDispatch();
    const { productsOnCart, paymentLink, clientInfo, shipmentInfo } = useSelector((state) => state.cart)
    // console.log(productsOnCart);


    const handleOnClick = (event) => {
        event.preventDefault();
        dispatch(createOrder(productsOnCart));
        dispatch(sendOrder(clientInfo, shipmentInfo, productsOnCart));
        if (paymentLink) {
            window.open(paymentLink, "_blank");
          }
    };

    useEffect(() => {
        // console.log(paymentLink);s
    }, [paymentLink])

    

    return (
        <div>
            {state &&
                <div>
                    <div>
                        <h5>Elija una forma de pago</h5>
                    </div>
                    {/* <form onSubmit={handleSubmit}> */}
                        <div>
                            <input type="radio" name="opcion" value="opcion1"/> Mercado Pago
                            <br/>
                            <input type="radio" name="opcion" value="opcion2"/> Transferencia bancaria
                            <br/>
                            <input type="radio" name="opcion" value="opcion3"/> Tarjetas de crédito y débito
                            <br/>
                        </div>   
                        <div>
                            <button onClick={() => {setFormInfo(false); setFormShipment(true); setFormPay(false);}}>Regresar a método de envío</button>
                            <button onClick={handleOnClick}>Realizar compra</button>
                        </div>     
                    {/* </form>             */}
                </div>
            }
        </div>
    )
};

export default FormPayCart;