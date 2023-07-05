import style from './ModalCart.module.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";

const ModalCart = (props) => {
  const cart = useSelector(state => state.cart);
  const productsOnCart = cart.productsOnCart;
  const [total, setTotal] = useState(0); // Estado para almacenar el precio total de todos los productos en el carrito

  useEffect(() => {
    const totalPrice = productsOnCart.reduce((sum, product) => {
      const price = parseFloat(product.salePrice ? product.salePrice : product.price);
      if (!isNaN(price)) {
        return sum + price;
      }
      return sum;
    }, 0);
    setTotal(totalPrice);
    console.log("totalPrice:", totalPrice);
  }, [productsOnCart]);  
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Estado de la compra
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={style.bodyModal}>
        {productsOnCart.map((product) => (
          <div className={style.containerBody} key={product._id}>
            <img className={style.imagen} src={product.image} alt={product.name} />
            <div className={style.datos}>
              <p className={style.name}>{product.name}</p>
              <p className={style.price}>{product.salePrice ? (
                      <small>Precio ${product.salePrice}</small>
                    ) : (
                      <small>Precio ${product.price}</small>
                    )}</p>
            </div>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer className={style.footer}>
        <div className={style.totalPriceContainer}>
          <span className={style.totalPrice}>Total: ${total}</span>
        </div>
        <Button onClick={props.onHide} className={style.seguir}>Seguir comprando</Button>
        <Link to={"/cart"} className={style.finish}>Finalizar compra</Link>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCart;
