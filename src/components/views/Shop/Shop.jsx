import Filters from "./Filters/Filters";
import Products from "./Products/Products";
import Paginado from "./Paginado/Paginado";

import { useSelector} from 'react-redux';

const Shop = () => {

    
    const {products} = useSelector(state => state);

    
    let cantPages = Math.floor(products.length / 12);


    return (
        <div>
            <Filters />
            <Products />
            <Paginado cantPages={cantPages} />
        </div>
    )

}

export default Shop;