import React, { useEffect, useState } from "react";
import style from "./FormShipmentCart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setShipment } from "../../../redux/CartActions";


const FormShipmentCart = ({ state, setFormInfo, setFormShipment, setFormPay }) => {

    const dispatch = useDispatch();
    const { shipmentInfo } = useSelector((state) => state.cart);

    useEffect(() => {
        console.log(shipmentInfo);
    }, [shipmentInfo]);

    const [ form, setForm ] = useState({
        street: '',
        number: '',
        floor: '',
        apartment: '',
        province: '',
        city: '',
        comentary: ''
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
        const newShipmentInfo ={
            street: form.street,
            number: form.number,
            floor: form.floor,
            apartment: form.apartment,
            province: form.province,
            city: form.city,
            comentary: form.comentary
        }
        dispatch(setShipment(newShipmentInfo));
        setFormInfo(false);
        setFormShipment(false);
        setFormPay(true);
    }

    const validateNumberInput = (event) => {
        const input = event.target;
        const sanitizedValue = input.value.replace(/\D/g, ''); // Elimina todos los caracteres que no sean dígitos

        input.value = sanitizedValue;
    }

    const isDisabled =
    form.street.trim() === '' ||
    form.number.trim() === '' ||
    form.province.trim() === '' ||
    form.city.trim() === '';

    return (
        <div>
            {state &&
                <form onSubmit={handleSubmit}>
                    <div>
                        <h5>Información de envío</h5>
                        <p>(*) Campos requeridos</p>
                    </div>
                    <div>
                        <label htmlFor="street">*Calle: </label>                        
                        <br/>                      
                        <input type="text" name="street" onChange={handleInputChange} value={form.street}/>
                    </div>
                    <div>
                        <label htmlFor="number">*Número: </label>
                        <br />
                        <input type="text" name="number" onInput={validateNumberInput}onChange={handleInputChange} value={form.number}/>
                    </div>
                    <div>
                        <label htmlFor="floor">Piso: </label>                        
                        <br/>                      
                        <input type="text" name="floor" onChange={handleInputChange} value={form.floor}/>
                    </div>
                    <div>
                        <label htmlFor="apartment">Departamento: </label>                        
                        <br/>                      
                        <input type="text" name="apartment" onChange={handleInputChange} value={form.apartment}/>
                    </div>
                    <div>
                        <label htmlFor="province">*Provincia: </label>
                        <br />
                        <input type="text" name="province" onChange={handleInputChange} value={form.province}/>
                    </div>
                    <div>
                        <label htmlFor="city">*Ciudad: </label>
                        <br />
                        <input type="text" name="city" onChange={handleInputChange} value={form.city}/>
                    </div>
                    <div>
                        <label htmlFor="comentary">¿Algo más para aclarar sobre el lugar?: </label>
                        <br />
                        <textarea type="text" name="comentary" onChange={handleInputChange} value={form.comentary}/>
                    </div>
                    <br />
                    <div>
                        <button onClick={() => {setFormInfo(true); setFormShipment(false); setFormPay(false);}}>Regresar a información del contacto</button>
                        <button disabled={isDisabled} type="submit" >Continuar con el método de pago</button>
                    </div>
                </form>
            }
        </div>
    )
};

export default FormShipmentCart;