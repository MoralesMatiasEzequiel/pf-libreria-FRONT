import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavorite, clearFav } from "../../../redux/favoriteActions";
import style from "./Favorites.module.css";

const Favorites = () => {
  const dispatch = useDispatch();
  const { favItems } = useSelector((state) => state?.favorites);
  const { products } = useSelector((state) => state?.products);

  const clearFavoritesHandler = () => {
    dispatch(clearFav());
  };

  const filteredProducts = products.filter((product) =>
    favItems.includes(product?._id)
  );

  const removeFavsHandler = (productId) => {
    dispatch(removeFavorite(productId));
  };

  // const addToCartHandler = (productId) => {
  //   // Lógica para agregar el producto al carrito
  //   console.log(`Agregando al carrito: ${productId}`);
  // };

  return (
    <div className={style.container}>
      <div className={style.containerInfo}>
        <h2 className={style.containerTitle}>LISTA DE FAVORITOS</h2>
        {!filteredProducts.length && (
          <div className={style.noProduct}>
            <img
              className={style.lupa}
              src="https://i.pinimg.com/originals/b8/d3/ed/b8d3ed745629d309fe813cb2ede52b9a.png"
              alt=""
            />
            <ul className={style.lista}>
              <h4 className={style.subtitulo}>
                No hay productos en tu lista de favoritos
              </h4>
              
              <li>Agrega productos a tu lista.</li>
            </ul>
          </div>
        )}

        {filteredProducts.length > 0 && (
          <div className={style.headBtn}>
            <button
              type="button"
              onClick={clearFavoritesHandler}
              className={style.clearFavoritesButton}
            >
              BORRAR TODOS
            </button>
          </div>
        )}
        <div className={style.productsContainer}>
          {filteredProducts.map((product) => (
            <div key={product?._id} className={style.product}>
              <div className={style.productDiv1}>
                <Link to={`/shop/${product?._id}`}>
                  <img src={product?.image} alt={product?.name} />
                </Link>
                <Link to={`/shop/${product?._id}`} className={style.link}>
                  <p className={style.link}>{product?.name}</p>
                </Link>
              </div>
              <div className={style.productDiv2}>
                <h4 className={style.precio}>${product?.price}</h4>
              </div>
              <div className={style.btnContainer}>
                {/* <button
                  onClick={() => addToCartHandler(product?._id)}
                  className={style.cartAddButton}
                >
                  AGREGAR AL CARRITO
                </button> */}

                <button
                  onClick={() => removeFavsHandler(product?._id)}
                  className={style.eliminarBtn}
                >
                  ELIMINAR
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
