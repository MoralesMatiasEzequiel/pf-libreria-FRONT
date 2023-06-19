import React, { useState } from "react";
import style from "./FormInfoCart.module.css";


const FormInfoCart = ({ state, setState }) => {

    const [ form, setForm ] = useState({
        email: '',
        name: '',
        lastname: '',
        phone: '',
        dni: ''
    });

    

    return (
        <div>
            {state &&
                <form>
                    <div>
                        <h5>Información del contacto</h5>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail: </label>
                        <br />
                        <input type="text" name="email" value={form.email}/>
                    </div>
                    <div>
                        <label htmlFor="name">Nombre: </label>
                        <br />
                        <input type="text" name="name" value={form.name}/>
                    </div>
                    <div>
                        <label htmlFor="lastname">Apellido: </label>
                        <br />
                        <input type="text" name="lastname" value={form.lastname}/>
                    </div>
                    <div>
                        <label htmlFor="phone">Teléfono: </label>
                        <br />
                        <input type="text" name="phone" value={form.phone}/>
                    </div>
                    <div>
                        <label htmlFor="dni">DNI/CUIL: </label>
                        <br />
                        <input type="text" name="dni" value={form.dni}/>
                    </div>
                    <br />
                    <div>
                        <button>Continuar con el método de envío</button>
                    </div>
                </form>
            }
        </div>
    )
};

export default FormInfoCart;