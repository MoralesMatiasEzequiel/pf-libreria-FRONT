import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Products = () => {
  const { productSee, productsExist } = useSelector(state => state.products);

  return (
    <div className="container">
        <div className="row">
          {!productsExist && <p>No hay productos asociados a esa búsqueda o categoría.</p>}
          {productSee.map((base, index) => (
            <div key={index} className="col-md-4">
              <div className="card">
                <Link to={'/shop/' + base._id}>
                  <img className="card-img-top" src={base.image} alt={base.name} />
                  <div className="card-body">
                    <h5 className="card-title">{base.name}</h5>
                    <p className="card-text text-secondary">$ {base.price}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Products;