import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllProductsByName } from "../../../redux/productActions";
import style from "../SearchBar/SearchBar.module.css";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Evita que se envíe el formulario
      onSearch(name);
      setName(""); // Borra el contenido del campo de búsqueda
    }
  };

  const onSearch = async (name) => {
    if (name) {
      dispatch(getAllProductsByName(name));
    }
  };

  return (
    <div className={style.containerSearch}>
      <input
        type="search"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        value={name}
        placeholder="Buscar productos"
        className={style.input}
      />
      <NavLink to={"/shop"} className={style.navlink}>
        <p onClick={() => { onSearch(name); setName("") }} className={style.p}>
          🔍
        </p>
      </NavLink>
    </div>
  );
};

export default SearchBar;
