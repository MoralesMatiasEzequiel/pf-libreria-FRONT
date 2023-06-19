import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllProductsByName } from "../../../redux/productActions";

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
    <div>
      <input
        type="search"
        onChange={handleChange}
        value={name}
        placeholder="Buscar productos"
      />
      <NavLink to={"/shop"}>
        <button onClick={() => { onSearch(name); setName(""); }}>🔍</button>
      </NavLink>
    </div>
  );
};

export default SearchBar;