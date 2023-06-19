import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllProductsByName } from "../../../redux/productActions";
import style from "../SearchBar/SearchBar.module.css"

const SearchBar = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const onSearch = async (name) => {
    if (name) {
      getAllProductsByName(name);
    }
  };

    return (
        <div className={style.containerSearch}>
            <input type="search" onChange={handleChange} value={name} placeholder="Buscar productos" className={style.input} />
            <NavLink to={"/shop"} className={style.navlink}>
                <p onClick={() => { onSearch(name); setName("")}} className={style.p}>🔍</p>
            </NavLink>
        </div>
    )
};

export default SearchBar;