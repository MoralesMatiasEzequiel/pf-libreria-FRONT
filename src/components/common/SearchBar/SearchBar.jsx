import { useDispatch } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllProductsByName } from "../../../redux/productActions";
import style from "../SearchBar/SearchBar.module.css"


const SearchBar = () => {
    const dispatch = useDispatch()
    const [ name, setName ] = useState("")

    // const isDisabled = name === ""               // disabled={isDisabled}   <--- Poner attribute en el button

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const onSearch = (name) => {
        if(name) dispatch(getAllProductsByName(name))                
    }

    return (
        <div className={style.containerSearch}>
            <input type="search" onChange={handleChange} value={name} placeholder="Buscar productos" className={style.input} />
            <NavLink to={"/shop"}>
                <button onClick={() => { onSearch(name); setName("")}} className={style.button}>🔍</button>
            </NavLink>
        </div>
    )

};

export default SearchBar;