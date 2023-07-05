import { useSelector, useDispatch } from "react-redux";
import { deleteProductFromCart, newCart } from "../../../redux/CartActions";
import { Link } from "react-router-dom";
import style from "./CartProducts.module.css";
import { useState, useEffect } from "react";

const CartProducts = () => {

  const dispatch = useDispatch();
  const { productsOnCart } = useSelector((state) => state.cart);

  const [ selectedStock, setSelectedStock ] = useState({});
  const isDisabled = !productsOnCart.length
  
  const removeProduct = (id) => {
    dispatch(deleteProductFromCart(id));
    let datos = localStorage.getItem("protucts_cart");
    let modify = JSON.parse(datos)
    
    let newdatos = modify.filter(pro => pro._id !== id);
    
    localStorage.setItem("protucts_cart", JSON.stringify(newdatos))
  };

  const handleStockChange = (change, productId) => {
    const currentStock = selectedStock[productId] || 1;
    const newStock = currentStock + change;
    
    const product = productsOnCart.find((product) => product._id === productId);
    
    if (newStock > 0 && newStock <= product.stock) {
      setSelectedStock((prevState) => ({
        ...prevState,
        [productId]: newStock,
      }));
    }
  };
  
  useEffect(() => {
    const updatedStock = {};
    productsOnCart.forEach((product) => {
      updatedStock[product._id] = product.quantity;
    });
    setSelectedStock(updatedStock);

    let data = localStorage.getItem("protucts_cart");
    let cart = JSON.parse(data)
    if (cart?.length > 0 && productsOnCart.length < 1) {

      dispatch(newCart(cart))
    }


  }, [productsOnCart]);

  const totalPrice = productsOnCart.reduce((total, product) => {
    const quantity = selectedStock[product._id] || product.quantity;
    return total + product.price * quantity;
  }, 0);

  useEffect(() => {
    const updatedStock = { ...selectedStock };
    productsOnCart.forEach((product) => {
      if (!updatedStock[product._id]) {
        updatedStock[product._id] = 1;
      }
    });
    setSelectedStock(updatedStock);
  }, [productsOnCart]);

  return (
    <div className={style.container}>
      <h1 className={style.containerTitle}>CARRITO</h1>

      <div className={style.productsContainer}>
        {productsOnCart &&
          productsOnCart.map((product, index) => {
            const productTotalPrice =
              (product.price || 0) * (selectedStock[product._id] || 1);

            return (
              <div key={index} className={style.product}>
                <div className={style.productDiv1}>
                  <img src={product.image} alt={product.name} />
                  <p>{product.name}</p>
                </div>
                <div className={style.productDiv2}>
                  <p className={style.precio}>${isNaN(productTotalPrice) ? 0 : productTotalPrice}</p>
                  <p>Stock: {product.stock - selectedStock[product._id]}</p>
                  <div className={style.quantityContainer}>
                    <p className={style.quantityLabel}>Cantidad:</p>
                    <div className={style.stock}>
                      <button
                        className={style.quantityButton}
                        onClick={() => handleStockChange(-1, product._id)}
                        disabled={selectedStock[product._id] === 1}
                      >
                        -
                      </button>
                      <span className={style.quantityValue}>{selectedStock[product._id] || 1}</span>
                      <button
                        className={style.quantityButton}
                        onClick={() => handleStockChange(1, product._id)}
                        disabled={selectedStock[product._id] === product.stock}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button className={style.eliminarBtn} onClick={() => removeProduct(product._id)}>
                  Eliminar
                </button>
              </div>
            );
          })}
      </div>

      <p className={style.totalPriceContainer}>
        Precio total: <span className={style.totalPrice}>${totalPrice}</span>
      </p>

      <Link to={"/checkout"} className={style.link}>
        <button disabled={isDisabled} className={style.compraBtn}>Hacer compra</button>
      </Link>
    </div>
  );
};

export default CartProducts;
