import style from "./Detail.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import ModalCart from "../../../common/Modals/ModalCart/ModalCart";
import { addProductOnCart } from "../../../../redux/CartActions";
import { useAuth0 } from "@auth0/auth0-react";
import { addFavorite, removeFavorite, updateFavorites } from "../../../../redux/favoriteActions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  const product = products.find(item => item._id === id);

	const { favItems } = useSelector((state) => state.favorites);
	
  const { currentUser } = useSelector((state) => state.user);

	const userId = currentUser._id;

  const { isAuthenticated } = useAuth0();

  const [modalShow, setModalShow] = useState(false);
	
	useEffect(() => {
    if(userId){
      console.log(favItems);
      dispatch(updateFavorites(userId, favItems));
    }
  }, [favItems, dispatch, userId, isAuthenticated])
	
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

  const filledcart = () => {

    let datas = localStorage.getItem("protucts_cart");
    let datasParse = JSON.parse(datas)
    if (datas?.length > 0) {
      let cartId = datasParse.map(pro => pro._id)
      return cartId;
    } else {
      return ["nada"]
    }
  };
  const [productsInCart, setProductsInCart] = useState(filledcart());


  useEffect(() => {
    // Aquí puedes agregar la lógica para obtener los detalles del producto según su id
  }, [id, dispatch]);


	
  const addToCart = (product) => {
		dispatch(addProductOnCart(product))
    setProductsInCart([...productsInCart, product._id])
    let datas = localStorage.getItem("protucts_cart");
    if (!datas) {
      localStorage.setItem("protucts_cart", JSON.stringify([product]))
    } else {
      let newdata = JSON.parse(datas)
      newdata.push(product)
      localStorage.setItem("protucts_cart", JSON.stringify(newdata))
    }
  }

	if (!product) {
    return <div>Producto no encontrado</div>;
  }

	const isFavorite = favItems?.some((item) => item === product._id);

  return (
		
    <div className={style.container}>
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div className="card" style={{ width: "100%", height: "450px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "25px", marginBottom: "25px" }}>
            <img className="card-img-top" src={product.image} alt={product.name} style={{ maxWidth: "300px", maxHeight: "400px" }} />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="card" style={{ width: "100%", height: "450px", marginTop: "25px", marginBottom: "25px" }}>
            <div className="card-body" style={{ padding: "10px" }}>
              <h5 className="card-title" style={{ color: "#191919", fontFamily: "Montserrat, sans-serif", fontWeight: "bold", fontSize: "24px", padding: "10px" }}>{product.name}</h5>
              <p style={{ color: "#3F3F3F", fontSize: "18px", padding: "10px" }}>Marca: {product.brand}</p>
              <p style={{ color: "#3F3F3F", fontSize: "18px", padding: "10px" }}>Stock: {product.stock}</p>
              <p style={{ color: "#3F3F3F", fontSize: "18px", padding: "10px" }}>Rating: {product.rating}</p>
              <p style={{ color: "#3F3F3F", fontSize: "18px", padding: "10px" }}>Detalle del producto: {product.description}</p>
              <h5 style={{ color: "#191919", fontFamily: "Montserrat, sans-serif", fontWeight: "bold", fontSize: "24px", padding: "10px" }}>$ {product.price}</h5>

              <div className={style.buttons}>
                {productsInCart.includes(product._id)
                  ? <p className={style.enCarrito}>EN CARRITO <i class="bi bi-cart-check"></i></p>
                  : <button className={style.btnCart} onClick={() => { setModalShow(true); addToCart(product); }}>
                    <i className="bi bi-cart"></i> Agregar al carrito
                  </button>

                }
								<button
									onClick={() => handleFavoriteClick(product._id)}
									className={style.btnFavorite}
								>
									{isFavorite ? (
										<i className="bi bi-heart-fill">QUITAR DE FAVORITOS</i> 
									) : (
										<i className="bi bi-heart">AGREGAR A FAVORITOS</i>
									)}
								</button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.linkDiv}>
        <Link to={"/shop"} className={style.linkBack}>{"Volver a Tienda"}</Link>
        </div>
      </div>
      <ModalCart
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Detail;
