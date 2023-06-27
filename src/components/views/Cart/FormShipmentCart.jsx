import React, { useEffect, useState } from "react";
import style from "./FormShipmentCart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setShipment } from "../../../redux/CartActions";


const FormShipmentCart = ({ state, setFormInfo, setFormShipment, setFormPay }) => {

    const dispatch = useDispatch();
    const { shipmentInfo } = useSelector((state) => state.cart);

    const lSFormContact = () => {
        let datos = localStorage.getItem("FormShipmentCart");
        if (datos) {
            return JSON.parse(datos)
        } else {
            return {
                street: '',
                number: '',
                floor: '',
                apartment: '',
                province: '',
                city: '',
                comentary: ''
            };
        }
    }

    const [FormShipmentCart, setFormShipmenCart] = useState(lSFormContact());

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormShipmenCart({
            ...FormShipmentCart,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newShipmentInfo = {
            street: FormShipmentCart.street,
            number: FormShipmentCart.number,
            floor: FormShipmentCart.floor,
            apartment: FormShipmentCart.apartment,
            province: FormShipmentCart.province,
            city: FormShipmentCart.city,
            comentary: FormShipmentCart.comentary
        }
        setFormShipmenCart({
            street: '',
            number: '',
            floor: '',
            apartment: '',
            province: '',
            city: '',
            comentary: ''
        })
        dispatch(setShipment(newShipmentInfo));
        setFormInfo(false);
        setFormShipment(false);
        setFormPay(true);
        localStorage.removeItem("FormShipmentCart")
    }

    const validateNumberInput = (event) => {
        const input = event.target;
        const sanitizedValue = input.value.replace(/\D/g, ''); // Elimina todos los caracteres que no sean dígitos

        input.value = sanitizedValue;
    }

    const isDisabled =
        FormShipmentCart.street.trim() === '' ||
        FormShipmentCart.number.trim() === '' ||
        FormShipmentCart.province.trim() === '' ||
        FormShipmentCart.city.trim() === '';

    useEffect(() => {
        localStorage.setItem("FormShipmentCart", JSON.stringify(FormShipmentCart))
    }, [shipmentInfo ,FormShipmentCart]);

    return (
        <div>
            {state &&
                <form onSubmit={handleSubmit} className={style.form}>
                    <div className={style.titles}>
                        <h5>Información de envío</h5>
                        <p>(*) Campos requeridos</p>
                    </div>
                    <div className={style.containerInfo}>
                        <div className={style.inputsContainer}>
                            <input type="text" name="street" placeholder="*Calle:" onChange={handleInputChange} value={FormShipmentCart.street} />
                        </div>
                        <div className={style.inputsContainer}>
                            <input type="text" name="number" placeholder="*Número:" onInput={validateNumberInput} onChange={handleInputChange} value={FormShipmentCart.number} />
                        </div>
                        <div className={style.inputsContainer}>
                            <input type="text" name="floor" placeholder="Piso:" onChange={handleInputChange} value={FormShipmentCart.floor} />
                        </div>
                        <div className={style.inputsContainer}>
                            <input type="text" name="apartment" placeholder="Departamento:" onChange={handleInputChange} value={FormShipmentCart.apartment} />
                        </div>
                        <div className={style.inputsContainer}>
                            <input type="text" name="province" placeholder="*Provincia:" onChange={handleInputChange} value={FormShipmentCart.province} />
                        </div>
                        <div className={style.inputsContainer}>
                            <input type="text" name="city" placeholder="*Ciudad:" onChange={handleInputChange} value={FormShipmentCart.city} />
                        </div>
                        <div className={style.inputsContainer}>
                            <textarea type="text" name="comentary" placeholder="Aclaración extra" className={style.aclaracion} onChange={handleInputChange} value={FormShipmentCart.comentary} />
                        </div>
                    </div>
                    <br />
                    <div>
                        <button className={style.envioBtn} onClick={() => { setFormInfo(true); setFormShipment(false); setFormPay(false); }}>Regresar a información del contacto</button>
                        <button className={style.envioBtn} disabled={isDisabled} type="submit" >Continuar con el método de pago</button>
                    </div>
                </form>
            }
        </div>
    )
};

export default FormShipmentCart;