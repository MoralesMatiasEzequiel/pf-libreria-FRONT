import React, { useState, useEffect } from "react";
import style from "./FormInfoCart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setClient } from "../../../redux/CartActions";


const FormInfoCart = ({ state }) => {

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
    }
    function validateNumberInput(event) {
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
                    </div>
                    <div>
                        <label htmlFor="email">E-mail: </label>
                        <input type="text" name="email" onChange={handleInputChange} value={form.email}/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="name">Nombre: </label>

                        <input type="text" name="name" onChange={handleInputChange} value={form.name}/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="surname">Apellido: </label>

                        <input type="text" name="surname" onChange={handleInputChange} value={form.surname}/>
                    </div>
                    <div>
                        <label htmlFor="phone">Teléfono (sin ceros ni guiones): </label>

                        <input type="text" name="phone" onInput={validateNumberInput} onChange={handleInputChange} value={form.phone}/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="dni">DNI/CUIL (sin puntos): </label>
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