import React, { useState, useEffect } from "react";
import style from "./FormPayCart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, sendOrder, cleanPaymentLink } from "../../../redux/CartActions";
import { useNavigate } from "react-router-dom";
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
            {showPayButton && <button className={style.payBtn} onClick={handlePayButton}>
              <img src={mpLogo} alt="" className={style.imgMP}/>
              Pagar con Mercado Pago</button>}
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
