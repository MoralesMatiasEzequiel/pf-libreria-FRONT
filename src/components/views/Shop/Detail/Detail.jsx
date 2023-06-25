import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import ModalCart from "../../../common/Modals/ModalCart/ModalCart";
import style from "./Detail.module.css";
import { addProductOnCart } from "../../../../redux/CartActions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  const product = products.find(item => item._id === id);

  const [modalShow, setModalShow] = useState(false);

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

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const handleFavoriteClick = () => {
    // Lógica para agregar o quitar de favoritos
  };

  const addToCart = (product) => {
    dispatch(addProductOnCart(product))
    setProductsInCart([...productsInCart, product._id])
  }

  return (
    <div className="container">
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
              <button className={style.btnPrimary} onClick={() => setModalShow(true)}>Comprar</button>


              {productsInCart.includes(product._id)
                ? "EN CARRITO" //<i class="bi bi-cart-check"></i>
                : <button className={style.btnCart} onClick={() => addToCart(product)}>
                  <i className="bi bi-cart"></i> Agregar al carrito
                </button>


              }



              <button className={style.btnFavorite} onClick={handleFavoriteClick}>
                <i className="bi bi-heart"></i> Favoritos
              </button>
            </div>

          </div>
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
