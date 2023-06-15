import SearchBar from "../SearchBar/SearchBar";
import style from "./Menu.module.css"

const Menu = () => {

    return(
        <div className={style.div}>
            <p>Soy el menú de categorías</p>
            <SearchBar />
        </div>
    )

}

export default Menu;