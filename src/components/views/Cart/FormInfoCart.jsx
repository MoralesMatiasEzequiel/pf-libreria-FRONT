import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClient } from "../../../redux/CartActions";
import style from "./FormInfoCart.module.css";


const FormInfoCart = ({ state, setFormInfo, setFormShipment, setFormPay }) => {

    const dispatch = useDispatch();
    const { clientInfo } = useSelector((state) => state.cart);

    useEffect(() => {
        console.log(clientInfo);
    }, [clientInfo])


    const [ form, setForm ] = useState({
        email: '',
        name: '',
        surname: '',
        phone: '',
        dni: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newClientInfo = {
            email: form.email,
            name: form.name,
            surname: form.surname,
            phone: form.phone,
            dni: form.dni
        } 
        dispatch(setClient(newClientInfo));
        setFormInfo(false);
        setFormShipment(true);
        setFormPay(false);
    }
    const validateNumberInput = (event) => {
        const input = event.target;
        const sanitizedValue = input.value.replace(/\D/g, ''); // Elimina todos los caracteres que no sean dígitos

        input.value = sanitizedValue;
    }

    const isDisabled =
    form.email.trim() === '' ||
    form.name.trim() === '' ||
    form.surname.trim() === '' ||
    form.phone.trim() === '' ||
    form.dni.trim() === '';

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
                            <input type="text" name="email" placeholder="*E-mail:" onChange={handleInputChange} value={form.email}/>
                        </div>
                        <div className={style.inputsContainer}>
                            <input type="text" name="name" placeholder="*Nombre:" onChange={handleInputChange} value={form.name}/>
                        </div>
                        <div className={style.inputsContainer}>
                            <input type="text" name="surname" placeholder="*Apellido:" onChange={handleInputChange} value={form.surname}/>
                        </div>
                        <div className={style.inputsContainer}>
                            <input type="text" name="phone" placeholder="*Teléfono (sin ceros ni guiones)" onInput={validateNumberInput} onChange={handleInputChange} value={form.phone}/>
                        </div>
                        <div className={style.inputsContainer}>
                            <input type="text" name="dni" placeholder="*DNI/CUIL (sin puntos):" onInput={validateNumberInput} onChange={handleInputChange} value={form.dni}/>
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