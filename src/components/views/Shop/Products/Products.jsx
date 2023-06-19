import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
//import "./Products.css";

const Products = () => {
  const { productSee, productsExist } = useSelector(state => state.products);

  return (
    <div className="container">
        <div className="row">
          {!productsExist && <p>No hay productos asociados a esa búsqueda o categoría.</p>}
          {productSee.map((base, index) => {
          return (
            <div key={index} className="col-md-3 ">
              <div className="card">
                <Link to={"/shop/" + base._id}>
                  <div class="card-body">
                    <img
                      className="card-img-top"
                      src={base.image}
                      alt="Card cap"
                    />
                                        <h5 className="card-title text-decoration-none">
                      {base.name}
                    </h5>
                    <p className="card-text text-secondary text-decoration-none">
                      $ {base.price}
                    </p>
                  </div>
                </Link>
                <div class="d-grid gap-2 d-md-block">
                  <button className="btn btn-primary">
                    <i className="bi bi-cart"></i> Agregar al carrito
                  </button>
                  <button className="btn btn-outline-danger">
                    <i className="bi bi-heart"></i> Favoritos
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        </div>
    </div>
  );
};

export default Products;