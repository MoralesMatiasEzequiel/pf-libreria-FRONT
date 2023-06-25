import React, { useState, useEffect } from "react";
import style from "./FormInfoCart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setClient } from "../../../redux/CartActions";


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
                <form onSubmit={handleSubmit}>
                    <div>
                        <h5>Información de contacto</h5>
                        <p>(*) Campos requeridos</p>
                    </div>
                    <div>
                        <label htmlFor="email">*E-mail: </label>
                        <br/>
                        <input type="text" name="email" onChange={handleInputChange} value={form.email}/>
                    </div>
                    <div>
                        <label htmlFor="name">*Nombre: </label>
                        <br/>
                        <input type="text" name="name" onChange={handleInputChange} value={form.name}/>
                    </div>
                    <div>
                        <label htmlFor="surname">*Apellido: </label>
                        <br/>
                        <input type="text" name="surname" onChange={handleInputChange} value={form.surname}/>
                    </div>
                    <div>
                        <label htmlFor="phone">*Teléfono (sin ceros ni guiones): </label>
                        <br/>
                        <input type="text" name="phone" onInput={validateNumberInput} onChange={handleInputChange} value={form.phone}/>
                    </div>
                    <div>
                        <label htmlFor="dni">*DNI/CUIL (sin puntos): </label>
                        <br/>
                        <input type="text" name="dni" onInput={validateNumberInput} onChange={handleInputChange} value={form.dni}/>
                    </div>
                    <br />
                    <div>
                        <button disabled={isDisabled} type="submit">Continuar con el método de envío</button>
                    </div>
                </form>
            }
        </div>
    )
};

export default FormInfoCart;