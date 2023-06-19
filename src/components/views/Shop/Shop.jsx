import Filters from "./Filters/Filters";
import Products from "./Products/Products";
import Paginado from "./Paginado/Paginado";
import style from "./Shop.module.css"
import Side from "./SideFilters/Side";

import { useSelector } from 'react-redux';

const Shop = () => {


    const { productSee } = useSelector(state => state.products);


    let cantPages = Math.floor(productSee.length / 12);


    return (
        <div>
            <Filters />
            <div className={style.containShop}>

                <Side />

                <Products />

            </div>
            <Paginado cantPages={cantPages} />
        </div>
    )

}

export default Shop;