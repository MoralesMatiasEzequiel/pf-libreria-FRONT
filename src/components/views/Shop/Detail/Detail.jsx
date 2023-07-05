import style from "./Detail.module.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import ModalCart from "../../../common/Modals/ModalCart/ModalCart";
import { addProductOnCart, deleteProductFromCart } from "../../../../redux/CartActions";
import { Rating } from '@mui/material';
import { rateProduct, getById, getProducts } from "../../../../redux/productActions";
import { useAuth0 } from "@auth0/auth0-react";
import { addFavorite, removeFavorite, updateFavorites } from "../../../../redux/favoriteActions";

const Detail = () => {
  const { id } = useParams();
  
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  const { detail } = useSelector(state => state.products);
  
  const [product, setProduct] = useState({});

  useEffect(() => {
    if(products?.length === 0){
      dispatch(getProducts());
    }
    
    if(products?.length !== 0){
      dispatch(getById(id));
      setProduct(detail);
    }
    
  }, [dispatch, id, products, detail]);

  const { favItems } = useSelector((state) => state.favorites);
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser._id;
  const { isAuthenticated } = useAuth0();
  const [modalShow, setModalShow] = useState(false);
  
  const { oneStarReviews, twoStarsReviews, threeStarsReviews, fourStarsReviews, fiveStarsReviews } = product;

  const [totalVotes, setTotalVotes] = useState(0); // Inicializa totalVotes con 0

  useEffect(() => {
    const total = oneStarReviews + twoStarsReviews + threeStarsReviews + fourStarsReviews + fiveStarsReviews;
    setTotalVotes(total);
  }, [oneStarReviews, twoStarsReviews, threeStarsReviews, fourStarsReviews, fiveStarsReviews]);
  
  console.log(totalVotes);

  useEffect(() => {
    if (userId) {
      dispatch(updateFavorites(userId, favItems));
    }
  }, [favItems, dispatch, userId, isAuthenticated, products]);

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

  const [rating, setRating] = useState(product.rating);
  const [showDisabledRating, setShowDisabledRating] = useState(false); // Estado para controlar la visualización del componente Rating deshabilitado

  const filledcart = () => {
    let datas = localStorage.getItem("protucts_cart");
    let datasParse = JSON.parse(datas);
    if (datas?.length > 0) {
      let cartId = datasParse.map(pro => pro._id);
      return cartId;
    } else {
      return ["nada"];
    }
  };
  const [productsInCart, setProductsInCart] = useState(filledcart());

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

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

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const isFavorite = favItems?.some((item) => item === product._id);

  return (
    <div className={style.container}>
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div
            className="card"
            style={{
              width: "100%",
              height: "450px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "25px",
              marginBottom: "25px"
            }}
          >
            <img
              className="card-img-top"
              src={product.image}
              alt={product.name}
              style={{ maxWidth: "300px", maxHeight: "400px" }}
            />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div
            className="card"
            style={{ width: "100%", height: "450px", marginTop: "25px", marginBottom: "25px" }}
          >
            <div className="card-body" style={{ padding: "10px" }}>
              <h5
                className="card-title"
                style={{
                  color: "#191919",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  fontSize: "24px",
                  padding: "10px"
                }}
              >
                {product.name}
              </h5>
              {showDisabledRating && (
                <p style={{ color: "#3F3F3F", fontSize: "18px", padding: "10px" }}>
                  <Rating name="disabled" value={rating} disabled /> ({totalVotes})
                </p>
              )}
              {!showDisabledRating && isAuthenticated && (
                <p style={{ color: "#3F3F3F", fontSize: "18px", padding: "10px" }}>
                  <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newRating) => {
                      setRating(newRating);
                      setShowDisabledRating(true); // Mostrar el Rating deshabilitado después de que el usuario haya ingresado un valor
                      dispatch(rateProduct(product._id, newRating));
                      setTotalVotes(prevVotes => prevVotes + 1);
                    }}
                  /> ({totalVotes})
                </p>
              )}
              <p style={{ color: "#3F3F3F", fontSize: "18px", padding: "5px" }}>Marca: {product.brand}</p>
              <p style={{ color: "#3F3F3F", fontSize: "18px", padding: "5px" }}>Stock: {product.stock}</p>
              <p style={{ color: "#3F3F3F", fontSize: "18px", padding: "5px" }}>Detalle del producto: {product.description}</p>
              <div
                style={{
                  color: "#191919",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  fontSize: "24px",
                  padding: "10px"
                }}
              >
               {product.salePrice ? (
										<div>
											<p style={{textDecoration: "line-through", fontSize: "14px",fontWeight:"600"}}>${product.price}</p>
											<p style={{color: '#FF9E5C', fontSize:'24px', fontWeight:"800"}}> ${product.salePrice}</p>

										</div>
                      
                    ) : (
                      <p style={{color: '#FF9E5C', fontSize:'24px', padding:"10px"}}>${product.price}</p>
                    )}
              </div>

              <div className={style.buttons}>
                {productsInCart.includes(product._id) ? (
                  <button className={style.btnCart} onClick={() => removeFromCart(product._id)}>
                    <i className="bi bi-cart-check"></i> Eliminar del carrito
                  </button>
                ) : (
                  <button className={style.btnCart} onClick={() => {setModalShow(true);addToCart(product);}}
                  >
                    <i className="bi bi-cart"></i> Agregar al carrito
                  </button>
                )}
                {
                  isAuthenticated && (<button onClick={() => handleFavoriteClick(product._id)} className={style.btnFavorite}>
                  {isFavorite ? (
                    <i className="bi bi-heart-fill"> Quitar de favoritos</i>
                  ) : (
                    <i className="bi bi-heart"> Agregar a favoritos</i>
                  )}
                </button>)
                }
                
              </div>
            </div>
          </div>
        </div>
        <div className={style.linkDiv}>
          <Link to={"/shop"} className={style.linkBack}>
            {"Volver a Tienda"}
          </Link>
        </div>
      </div>
      <ModalCart show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Detail;
