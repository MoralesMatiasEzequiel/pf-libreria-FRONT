import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { totalPag, getProducts } from "../../../../redux/productActions";
import { addProductOnCart, deleteProductFromCart } from "../../../../redux/CartActions";
import { useAuth0 } from "@auth0/auth0-react";
import Paginado from "../Paginado/Paginado";
import style from "./Products.module.css";
import { addFavorite, removeFavorite, updateFavorites } from "../../../../redux/favoriteActions";

const Products = () => {
  const { productSee, pag, productsExist, brandSelected } = useSelector(
    (state) => state.products
  );

  const { favItems } = useSelector((state) => state.favorites);
	
  const { currentUser } = useSelector((state) => state.user);

	const userId = currentUser._id;

  const { isAuthenticated } = useAuth0();

  const filledcart = () => {
    let datas = localStorage.getItem("protucts_cart");
    let datasParse = JSON.parse(datas);
    if (datas?.length > 0) {
      
      let cartId = datasParse.map((pro) => pro?._id);
      //console.log(cartId);
      return cartId;
    } else {
      return [];
    }
  };

  const dispatch = useDispatch();

  const lSProductSee = () => {
    let datos = localStorage.getItem("ProductSee");
    let history = JSON.parse(datos);

    if (history?.length > 0 && productSee.length < 1 && productsExist) {
      dispatch(getProducts());
      return history;
    } else {
      return [];
    }
  };

  const [allProducts, setAllProducts] = useState(lSProductSee());

  const [pagines, setPagines] = useState([]);

  const [productsInCart, setProductsInCart] = useState(filledcart());

  useEffect(() => {
    if (productSee.length > 0) {
      localStorage.setItem("ProductSee", JSON.stringify(productSee));
    }
    if (brandSelected.length > 0) {
      let papeliri = productSee.filter((pro) =>
        brandSelected.includes(pro.brand)
      );
      setAllProducts(papeliri);
    } else if (productSee.length > 0) {
      setAllProducts(productSee);
    }
  }, [brandSelected, productSee, productsInCart]);

  useEffect(() => {
    if(userId){
      console.log(favItems);
      dispatch(updateFavorites(userId, favItems));
    }
  }, [favItems, dispatch, userId, isAuthenticated])

  let desde = (pag - 1) * 12;
  let hasta = pag * 12;
  const viewsProducts = allProducts.slice(desde, hasta);

  useEffect(() => {
    let cantPages = Math.round(allProducts.length / 12 + 0.4);
    setPagines(cantPages);
    dispatch(totalPag(cantPages));
  }, [allProducts, dispatch]);

  const addToCart = (product) => {
    dispatch(addProductOnCart(product));
    setProductsInCart([...productsInCart, product._id]);

    let datas = localStorage.getItem("protucts_cart");
    if (!datas) {
      localStorage.setItem("protucts_cart", JSON.stringify([product]));
    } else {
      let newdata = JSON.parse(datas);
      newdata.push(product);
      localStorage.setItem("protucts_cart", JSON.stringify(newdata));
    }
  };

  const removeFromCart = (productId) => {
    dispatch(deleteProductFromCart(productId));
    setProductsInCart(productsInCart.filter(id => id !== productId));

    let datas = localStorage.getItem("protucts_cart");
    if (datas) {
      let newdata = JSON.parse(datas).filter(product => product._id !== productId);
      localStorage.setItem("protucts_cart", JSON.stringify(newdata));
    }
  };

  const handleFavoriteClick = (productId) => {
    if (isAuthenticated) {
      const isFavorite = favItems?.some((item) => item === productId);
      if (isFavorite) {
        dispatch(removeFavorite(productId));
      } else {
        dispatch(addFavorite(productId));
      }
    } else {
      alert("Debes estar autenticado para agregar productos a favoritos.");
    }
  };

  return (
    <div className={style.totalContainer}>
      <Paginado cantPages={pagines} />
      <div className={style.container}>
        {!productsExist && (
          <div className={style.noProduct}>
            <img
              className={style.lupa}
              src="https://i.pinimg.com/originals/b8/d3/ed/b8d3ed745629d309fe813cb2ede52b9a.png"
              alt=""
            />
            <ul className={style.lista}>
              <h4 className={style.subtitulo}>
                No hay productos que coincidan con tu búsqueda
              </h4>
              <li>Revisá la ortografía de la palabra.</li>
              <li>Utilizá palabras más genéricas o menos palabras.</li>
              <li>
                Navegá por las categorías para encontrar un producto similar
              </li>
            </ul>
          </div>
        )}

        {productsExist &&
          viewsProducts?.map((base, index) => {
            const isFavorite = favItems.some((item) => item === base._id);
            return (
              <div key={index} className={style.productCard}>
                <Link to={"/shop/" + base._id}>
                  <div className={style.productTumb}>
                    <img src={base.image} alt={base.name} />
                  </div>
                </Link>
                <div className={style.productDetails}>
                  <Link className={style.link} to={"/shop/" + base._id}>
                    <h4 className={style.title}>{base.name}</h4>
                  </Link>
                  <div className={style.productBottomDetails}>
                    <div className={style.productPrice}>
                      <small>${base.price}</small>
                    </div>

                    <div className={style.productLinks}>
                      {
                        isAuthenticated && (<button
                        onClick={() => handleFavoriteClick(base._id)}
                        className={style.favoriteButton}
                      >
                        {isFavorite ? (
                          <i className="bi bi-heart-fill"></i>
                        ) : (
                          <i className="bi bi-heart"></i>
                        )}
                      </button>)
                      }
                      
                      {productsInCart.includes(base._id) ? (
                        <button
                          onClick={() => removeFromCart(base._id)}
                        >
                          <i className="bi bi-cart-check"></i>
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            addToCart(base);
                          }}
                        >
                          <i className="bi bi-cart"></i>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Paginado className={style.paginado} cantPages={pagines} />
    </div>
  );
};

export default Products;
