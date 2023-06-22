import style from './ModalCart.module.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const ModalCart = (props) => {

    const { id } = useParams();
    const { products } = useSelector(state => state.products);
    const product = products.find(item => item._id === id);


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
            <h6 className={style.titleProduct}>Producto</h6>
            <h6 className={style.titleStock}>Cantidad</h6>
            <h6 className={style.titlePrice}>Total</h6>
        </div> 
        <div className={style.containerBody}>
        <img className={style.imagen} src={product.image} alt={product.name} />
        <p className={style.name}>{product.name}</p>
        {/* <Link to={`/shop/${id}`}>{product.name}</Link> */}
        <select name="stock" id="" className={style.stock}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        <p>${product.price}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Seguir comprando</Button>
        <Link to={"/cart"} className={style.finish}>Finalizar compra</Link>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCart;