import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  const product = products.find(item => item._id === id);

  useEffect(() => {
    // Aquí puedes agregar la lógica para obtener los detalles del producto según su id
  }, [id, dispatch]);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img className="card-img-top" src={product.image} alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <p>Marca: {product.brand}</p>
          <p>Stock: {product.stock}</p>
          <p>Rating: {product.rating}</p>
          <p>Detalle del producto: {product.description}</p>
          <p>Precio: ${product.price}</p>
          <button className="btn btn-primary">
            <i className="bi bi-cart"></i> Comprar
          </button>
          <button className="btn btn-outline-danger">
            <i className="bi bi-heart"></i> Favoritos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
