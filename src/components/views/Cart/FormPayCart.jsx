import React from "react";
import style from "./FormPayCart.module.css";


const FormPayCart = ({ state, setState }) => {

    

    return (
        <div>
            {state &&
                <div>
                    <div>
                        <h5>Elija una forma de pago</h5>
                    </div>
                    <div>
                        <input type="radio" name="opcion" value="opcion1"/> Mercado Pago
                        <br/>
                        <input type="radio" name="opcion" value="opcion2"/> Transferencia bancaria
                        <br/>
                        <input type="radio" name="opcion" value="opcion3"/> Tarjetas de crédito y débito
                        <br/>
                    </div>   
                    <div>
                        <button>Regresar a método de envío</button>
                        <button>Realizar compra</button>
                    </div>                 
                </div>
            }
        </div>
    )
};

export default FormPayCart;