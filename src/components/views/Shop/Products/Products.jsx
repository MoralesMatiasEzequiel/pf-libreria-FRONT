import React, { useEffect } from "react";
import { getProducts } from "../../../../redux/productActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        {products.map((base, index) => {
          return (
            <div key={index} className="col-md-4">
              <div className="card">
                <div class="card-body">
                  <Link to={"/shop/" + base._id}>
                    <h5 className="card-title">{base.name}</h5>
                    <img
                      className="card-img-top"
                      src={base.image}
                      alt="Card image cap"
                    />
                    <p className="card-text text-secondary">$ {base.price}</p>
                  </Link>
                </div>
                <a href="#" class="btn btn-primary">
                  <i className="bi bi-cart"></i>
                </a>
                <a href="#" class="btn btn-primary">
                  <i className="bi bi-heart"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

{
  /* <Link to={'/shop/' + base.id}>
                <img className="card-img-top" src={base.image} alt="Card image cap"/>
                <div className="card-body">
									<h5 className="card-title">{base.name}</h5>
                	<p className="card-text text-secondary">$ {base.price}</p>
								</div>
							</Link>
							<div className="card-body ">

							</div> */
}
