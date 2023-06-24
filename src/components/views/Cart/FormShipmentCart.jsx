import React, { useState } from "react";
import style from "./FormShipmentCart.module.css";


const FormShipmentCart = ({ state }) => {

    const [ form, setForm ] = useState({
        street: '',
        number: '',
        country: '',
        city: '',
        clarification: ''
    });

    

    return (
        <div>
            {state &&
                <form>
                    <div>
                        <h5>Información del envío</h5>
                    </div>
                    <div>
                        <label htmlFor="street">Calle: </label>
                        <br />
                        <input type="text" name="street" value={form.street}/>
                    </div>
                    <div>
                        <label htmlFor="number">Número: </label>
                        <br />
                        <input type="text" name="number" value={form.number}/>
                    </div>
                    <div>
                        <label htmlFor="country">País: </label>
                        <br />
                        <input type="text" name="country" value={form.country}/>
                    </div>
                    <div>
                        <label htmlFor="city">Ciudad: </label>
                        <br />
                        <input type="text" name="city" value={form.city}/>
                    </div>
                    <div>
                        <label htmlFor="clarification">¿Algo más para aclarar sobre el lugar?: </label>
                        <br />
                        <textarea type="text" name="clarification" value={form.clarification}/>
                    </div>
                    <br />
                    <div>
                        <button>Regresar a información del contacto</button>
                        <button>Continuar con el método de pago</button>
                    </div>
                </form>
            }
        </div>
    )
};

export default FormShipmentCart;