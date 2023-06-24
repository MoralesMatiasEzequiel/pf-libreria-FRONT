import { useSelector, useDispatch } from "react-redux";
import { deleteProductFromCart } from "../../../redux/CartActions";
import { Link } from "react-router-dom"


const CartProducts = () => {
    const dispatch = useDispatch();
    const { productsOnCart } = useSelector(state => state.cart)
    // console.log(productsOnCart);

    const removeProduct = (id) => {
        dispatch(deleteProductFromCart(id))
    }
    
    return (
        <div>
            <h1>CARRITO</h1>

            {
                productsOnCart && productsOnCart.map((product, index) => {
                    return (
                        <div key={index}>
                            <img src={product.image} alt={product.name} />
                            <h4>{product.name}</h4>
                            <p>Marca: {product.brand}</p>
                            <p>Stock: {product.stock}</p>
                            <p>Rating: {product.rating}</p>
                            <p>Detalle del producto: {product.description}</p>
                            <p>Precio: ${product.price}</p>
                            <button onClick={() => removeProduct(product._id)}>Eliminar del carrito</button>
                            <Link to={"/checkout"}>
                                <button>Hacer compra</button>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default CartProducts;