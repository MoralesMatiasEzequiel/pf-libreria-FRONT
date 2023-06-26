import React, { useState, useEffect } from "react";
import style from "./FormPayCart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, sendOrder, cleanPaymentLink } from "../../../redux/CartActions";
import { useNavigate } from "react-router-dom";

const FormPayCart = ({ state, setFormInfo, setFormShipment, setFormPay }) => {
  const dispatch = useDispatch();
  const { productsOnCart, paymentLink, clientInfo, shipmentInfo } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [showPayButton, setShowPayButton] = useState(false);

  useEffect(() => {
    console.log(paymentLink);
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
    navigate("/");
    dispatch(cleanPaymentLink());
  };

  return (
    <div>
      {state && (
        <div>
          <div>
            <button
              onClick={() => {
                setFormInfo(false);
                setFormShipment(true);
                setFormPay(false);
              }}
            >
              Regresar a método de envío
            </button>
            <button onClick={handleOnClick}>Terminar compra</button>
            {showPayButton && <button onClick={handlePayButton}>Ir a pagar</button>}
          </div>
          {/* </form> */}
        </div>
      )}
    </div>
  );
};

export default FormPayCart;
