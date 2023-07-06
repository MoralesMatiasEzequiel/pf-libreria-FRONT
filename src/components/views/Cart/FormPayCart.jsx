import React, { useState, useEffect } from "react";
import style from "./FormPayCart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, sendOrder, cleanPaymentLink } from "../../../redux/CartActions";
import { useNavigate, Link } from "react-router-dom";
import mpLogo from "./mpLogo.png";

const FormPayCart = ({ state, setFormInfo, setFormShipment, setFormPay }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productsOnCart, paymentLink, clientInfo, shipmentInfo } = useSelector((state) => state.cart);
  const [showPayButton, setShowPayButton] = useState(false);

  useEffect(() => {
    // console.log(paymentLink);
    if (paymentLink) {
      setShowPayButton(true);
    }
  }, [paymentLink]);

  const handleOnClick = (event) => {
    event.preventDefault();
    dispatch(createOrder(productsOnCart));
    dispatch(sendOrder(clientInfo, shipmentInfo, productsOnCart));
  };

  const handlePayButton = (event) => {
    window.open(paymentLink, "_blank");
    navigate("/success");
    dispatch(cleanPaymentLink());
  };

  return (
    <div>
      {state && (
        <div className={style.container}>
          <div>
            <button className={style.finishBtn} onClick={handleOnClick}>Terminar compra</button>
          </div>
          <div>
            {showPayButton && 
            <div>
              <div className={style.divMercado}>
                <h4>Mercado Pago:</h4>
                <button className={style.payBtn} onClick={handlePayButton}>
                  <img src={mpLogo} alt="" className={style.imgMP}/>Pagar con Mercado Pago
                </button>
              </div>            
              <div className={style.divTrnasfer}>
                <h4>Transferencia bancaria directa:</h4>
                <p>
                  Realizar tu pago directamente en nuestra cuenta bancaria. Por favor, usá el número del pedido como referencia de pago. Tu pedido no se procesará hasta que se haya recibido el importe en nuestra cuenta. 
                </p>
                <br />
                <div>
                  <p>
                    <span>Titular de la cuenta:</span> Libería Pluma.
                  </p>
                  <p>
                    <span>Nro de cuenta:</span> 200658799980
                  </p>
                  <p>
                    <span>Tipo de cuenta: </span> Caja de ahorro en pesos.
                  </p>
                  <p>
                    <span>CBU: </span> 012345678921346
                  </p>
                  <p>
                    <span>Alias: </span> PLUMA.LIBRERIA
                  </p>
                  <p>
                    <span>-Banco Nación-</span>
                  </p>
                </div>
              </div>
                  <Link to={'/success'}>
                    <button className={style.finishBtn}>¡Ya hice la transferencia!</button>
                  </Link>
            </div>}
              
          </div>
          <div>
            <button className={style.backBtn}
            onClick={() => {
              setFormInfo(false);
              setFormShipment(true);
              setFormPay(false);
            }}
            >
            Regresar a método de envío
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormPayCart;
