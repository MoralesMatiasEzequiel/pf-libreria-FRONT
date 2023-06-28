import style from './ModalCart.module.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";

const ModalCart = (props) => {
  const { id } = useParams();
  const { products } = useSelector(state => state.products);
  const product = products.find(item => item._id === id);

  const [selectedStock, setSelectedStock] = useState(1); // Estado para almacenar la cantidad seleccionada

  const handleStockChangeModal = (change) => {
    const newStock = selectedStock + change;
    const productStock = product.stock || 1;

    if (newStock > 0 && newStock <= productStock) {
      setSelectedStock(newStock);
    }
  };

  // Calcula el precio total multiplicando el precio del producto por la cantidad seleccionada
  const total = product.price * selectedStock;

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
        <div className={style.containerBody}>
          <img className={style.imagen} src={product.image} alt={product.name} />
          <p className={style.name}>{product.name}</p>
          <div className={style.quantityContainer}>
            <p className={style.quantityLabel}>Cantidad:</p>
            <div className={style.stock}>
              <button
                className={style.quantityButton}
                onClick={() => handleStockChangeModal(-1)}
                disabled={selectedStock === 1}
              >
                -
              </button>
              <span className={style.quantityValue}>{selectedStock}</span>
              <button
                className={style.quantityButton}
                onClick={() => handleStockChangeModal(1)}
                disabled={selectedStock === (product.stock || 1)}
              >
                +
              </button>
            </div>
          </div>
          <p className={style.totalPrice}>Total: ${total}</p> {/* Muestra el precio total */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className={style.seguir}>Seguir comprando</Button>
        <Link to={"/cart"} className={style.finish}>Finalizar compra</Link>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCart;
