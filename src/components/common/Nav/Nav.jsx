import { NavLink } from "react-router-dom"
import style from "./Nav.module.css"


const Nav = () => {

    return (

        <nav className={style.nav}>
            <div className={style.div}>
                <NavLink to={"/"}>
                    <img className={style.logo} src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f4da.png" alt="lilbrito" />
                </NavLink>
            </div>

            <div className={style.div2}>
                <ul className={style.ul}>
                    <li className={style.li}>
                        <NavLink to={"/about"} className={style.navLink}>Contacto</NavLink>
                    </li>

                    <li className={style.li} >
                        <NavLink to={""} className={style.navLink}>Ingresar / Registrarse</NavLink>
                    </li>

                    <li className={style.li} >
                        <NavLink to={"/cart"} className={style.navLink}>Carrito</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    )

}

export default Nav;