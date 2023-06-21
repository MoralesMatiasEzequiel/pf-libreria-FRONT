import Filters from "./Filters/Filters";
import Products from "./Products/Products";
import style from "./Shop.module.css"
import Side from "./SideFilters/Side";

import { useSelector } from 'react-redux';

const Shop = () => {



    return (
        <div>
            <Filters />
            <div className={style.containShop}>

                <Side />

                <Products />

            </div>
            
        </div>
    )

}

export default Shop;