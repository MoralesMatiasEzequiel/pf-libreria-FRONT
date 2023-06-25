import React, { useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductFromCart, newCart } from "../../../redux/CartActions";
import style from "./Cart.module.css";
import { Link } from "react-router-dom";
import FormInfoCart from "./FormInfoCart";
import FormShipmentCart from "./FormShipmentCart";
import FormPayCart from "./FormPayCart";
import CartProducts from "../CartProducts/CartProducts";

const Cart = () => {

    const [ formInfo, setFormInfo ] = useState(true);
    const [ formShipment, setFormShipment ] = useState(false);
    const [ formPay, setFormPay ] = useState(false);

    const handleFormInfoClick = () => {
        setFormInfo(true);
        setFormShipment(false);
        setFormPay(false);
      };
    
    const handleFormShipmentClick = () => {
    setFormInfo(false);
    setFormShipment(true);
    setFormPay(false);
    };

    const handleFormPayClick = () => {
    setFormInfo(false);
    setFormShipment(false);
    setFormPay(true);
    };

    const dispatch = useDispatch();
    const { productsOnCart } = useSelector((state) => state.cart);

    const [selectedStock, setSelectedStock] = useState({});
    
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
            <div className={style.containerInfo}>
                <div className={style.linkDiv}>
                    <Link to={"/cart"} className={style.linkBack}>{"Volver al carrito"}</Link>
                </div>
                <button
                    className={style.boton}
                    onClick={handleFormInfoClick}
                    disabled={formInfo}
                >Cliente</button>
                <button 
                    className={style.boton}
                    onClick={handleFormShipmentClick}
                    disabled={formShipment}
                >Envío</button>
                <button 
                    className={style.boton}
                    onClick={handleFormPayClick}
                    disabled={formPay}
                >Pago</button>
                <FormInfoCart state={formInfo} setFormInfo={setFormInfo} setFormShipment={setFormShipment} setFormPay={setFormPay}/>
                <FormShipmentCart state={formShipment} setFormInfo={setFormInfo} setFormShipment={setFormShipment} setFormPay={setFormPay} />
                <FormPayCart state={formPay} setFormInfo={setFormInfo} setFormShipment={setFormShipment} setFormPay={setFormPay}/>
            </div>   
            <div className={style.containerSubTotal}>
                <h5>Resumen de la compra</h5> 
                    <div>
                        <div className={style.containerCart}>
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
                                        </div>
                                    </div>
                                    );
                                })}
                            </div>

                            <p className={style.totalPriceContainer}>
                                Precio total: <span className={style.totalPrice}>${totalPrice}</span>
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )

}

export default Cart;