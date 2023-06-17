import React, { useEffect } from "react";
import { getProducts } from "../../../../redux/productActions";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";


const Products = () => {
	const dispatch = useDispatch();
	const { productSee } = useSelector( state=> state.products)

	useEffect(() => {
		dispatch(getProducts());
	},[dispatch])

  return (
    <div className="container">
      <div className="row">
        {
          productSee.map((base, index) => {
            return (
              <div key={index} className="col-md-4">
                <div className="card" >
                <Link to={'/shop/' + base._id}>
                  <img className="card-img-top" src={base.image} alt={base.name}/>
                  <div className="card-body">
                    <h5 className="card-title">{base.name}</h5>
                    <p className="card-text text-secondary">$ {base.price}</p>
                  </div>
                </Link>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Products;
