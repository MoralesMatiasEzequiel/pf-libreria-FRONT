import { NavLink} from "react-router-dom"
import style from "./Nav.module.css"


const Nav = () => {

    return(
        <nav className={style.nav}>
            <div className={style.div}>
                <NavLink to={"/"}>
                    <img src="" alt="logo" />
                </NavLink>
            </div>

            <div className={style.div}>
                <ul className={style.ul}>
                    <li>
                        <NavLink to={"/about"} className={style.navLink}>Contacto</NavLink>
                    </li>

                    <li>
                        <NavLink to={""} className={style.navLink}>Ingresar / Registrarse</NavLink>
                    </li>

                    <li>
                        <NavLink to={"/cart"} className={style.navLink}>Carrito</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Nav;