import Filters from "./Filters/Filters";
import Products from "./Products/Products";
import Paginado from "./Paginado/Paginado"; // Importa el componente Paginado
import style from "./Shop.module.css";
import Side from "./SideFilters/Side";

const Shop = () => {
  return (
    <div>
      <Filters />
      <div className={style.containShop}>
        <div className={style.sideContainer}>
          <Side className={style.side} />
        </div>
        <div className={style.productsContainer}>
          <Products className={style.products} />
        </div>
      </div>
      
    </div>
  );
};

export default Shop;