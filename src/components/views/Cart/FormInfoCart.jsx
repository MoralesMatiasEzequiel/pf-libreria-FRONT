import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClient } from "../../../redux/CartActions";
import style from "./FormInfoCart.module.css";


const FormInfoCart = ({ state, setFormInfo, setFormShipment, setFormPay }) => {

    const dispatch = useDispatch();
    const { clientInfo } = useSelector((state) => state.cart);

    const lSFormContact = () => {
        let datos = localStorage.getItem("formInfoCart");
        if (datos) {
            return JSON.parse(datos)
        } else {
            return {
                email: '',
                name: '',
                surname: '',
                phone: '',
                dni: ''
            };
        }
    }
    const [formInfoCart, setFormInfoCart] = useState(lSFormContact());

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormInfoCart({
            ...formInfoCart,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newClientInfo = {
            email: formInfoCart.email,
            name: formInfoCart.name,
            surname: formInfoCart.surname,
            phone: formInfoCart.phone,
            dni: formInfoCart.dni
        }
        setFormInfoCart({
            email: '',
            name: '',
            surname: '',
            phone: '',
            dni: ''
        })
        dispatch(setClient(newClientInfo));
        setFormInfo(false);
        setFormShipment(true);
        setFormPay(false);
        
        localStorage.removeItem("formInfoCart")
    }
    const validateNumberInput = (event) => {
        const input = event.target;
        const sanitizedValue = input.value.replace(/\D/g, ''); // Elimina todos los caracteres que no sean dígitos

        input.value = sanitizedValue;
    }

    const isDisabled =
        formInfoCart.email.trim() === '' ||
        formInfoCart.name.trim() === '' ||
        formInfoCart.surname.trim() === '' ||
        formInfoCart.phone.trim() === '' ||
        formInfoCart.dni.trim() === '';

    useEffect(() => {
        localStorage.setItem("formInfoCart", JSON.stringify(formInfoCart))
    }, [formInfoCart]);
    return (
        <div>
            {state &&
                <form onSubmit={handleSubmit} className={style.form}>
                    <div className={style.titles}>
                        <h5>Información de contacto</h5>
                        <p>(*) Campos requeridos</p>
                    </div>
                    <div className={style.containerInfo}>
                        <div className={style.inputsContainer}>
                            <input type="text" name="email" placeholder="*E-mail:" onChange={handleInputChange} value={formInfoCart.email} />
                        </div>
                        <div className={style.inputsContainer}>
                            <input type="text" name="name" placeholder="*Nombre:" onChange={handleInputChange} value={formInfoCart.name} />
                        </div>
                        <div className={style.inputsContainer}>
                            <input type="text" name="surname" placeholder="*Apellido:" onChange={handleInputChange} value={formInfoCart.surname} />
                        </div>
                        <div className={style.inputsContainer}>
                            <input type="text" name="phone" placeholder="*Teléfono (sin ceros ni guiones)" onInput={validateNumberInput} onChange={handleInputChange} value={formInfoCart.phone} />
                        </div>
                        <div className={style.inputsContainer}>
                            <input type="text" name="dni" placeholder="*DNI/CUIL (sin puntos):" onInput={validateNumberInput} onChange={handleInputChange} value={formInfoCart.dni} />
                        </div>
                        <br />
                        <div>
                            <button className={style.envioBtn} disabled={isDisabled} type="submit">Continuar con el método de envío</button>
                        </div>
                    </div>
                </form>
            }
        </div>
    )
};

export default FormInfoCart;