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
                <form onSubmit={handleSubmit} className={style.form}>
                    <div className={style.titles}>
                        <h5>Información de envío</h5>
                        <p>(*) Campos requeridos</p>
                    </div>
                    <div className={style.containerInfo}>
                        <div className={style.inputsContainer}>                   
                            <input type="text" name="street" placeholder="*Calle:" onChange={handleInputChange} value={form.street}/>
                        </div>
                        <div className={style.inputsContainer}>
                            <input type="text" name="number" placeholder="*Número:" onInput={validateNumberInput}onChange={handleInputChange} value={form.number}/>
                        </div>
                        <div className={style.inputsContainer}>           
                            <input type="text" name="floor" placeholder="Piso:" onChange={handleInputChange} value={form.floor}/>
                        </div>
                        <div className={style.inputsContainer}>
                            <input type="text" name="apartment" placeholder="Departamento:" onChange={handleInputChange} value={form.apartment}/>
                        </div>
                        <div className={style.inputsContainer}>
                            <input type="text" name="province" placeholder="*Provincia:" onChange={handleInputChange} value={form.province}/>
                        </div>
                        <div className={style.inputsContainer}>
                            <input type="text" name="city" placeholder="*Ciudad:" onChange={handleInputChange} value={form.city}/>
                        </div>
                        <div className={style.inputsContainer}>
                            <textarea type="text" name="comentary" placeholder="Aclaración extra" className={style.aclaracion} onChange={handleInputChange} value={form.comentary}/>
                        </div>
                    </div>
                    <br />
                    <div>
                        <button className={style.envioBtn} onClick={() => {setFormInfo(true); setFormShipment(false); setFormPay(false);}}>Regresar a información del contacto</button>
                        <button className={style.envioBtn} disabled={isDisabled} type="submit" >Continuar con el método de pago</button>
                    </div>
                </form>
            }
        </div>
    )
};

export default FormShipmentCart;