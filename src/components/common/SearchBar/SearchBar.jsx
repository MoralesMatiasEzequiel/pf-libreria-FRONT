// import { useDispatch } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";

//NOTA >>>> LO QUE ESTA COMENTADO TOCA ESPERAR A QUE ESTE LISTO EL REDUCER PARA QUE FUNCIONE

const SearchBar = () => {
    // const dispatch = useDispatch()
    const [ name, setName ] = useState("")

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const onSearch = (name) => {
        // if(name) dispatch(getProductsByName(name))                //ESPERAR HACER EL REDUCER PARA QUE FUNCIONE
    }


    return (
        <div>
            <input type="search" onChange={handleChange} value={name} placeholder="Buscar productos" />
            <NavLink to={"/shop"}>
                <button onClick={() => { onSearch(name); setName("")}}>🔍</button>
            </NavLink>
        </div>
    )

};

export default SearchBar;