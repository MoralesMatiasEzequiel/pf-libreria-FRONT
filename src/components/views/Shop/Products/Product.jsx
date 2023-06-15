import React, {useEffect} from "react";
import user from './user.jpg'
import { getProducts } from "../../../../redux/productActions";
import {useDispatch, useSelector} from 'react-redux';


const Product = () => {
	const dispatch = useDispatch();
	const {products} = useSelector( state=> state.products)
	useEffect(() => {
		dispatch(getProducts());
	},[dispatch])

  return (
    <div className="container">
      <div className="row">
        {products.map((base, index) => {
          return (
            <div key={index} className="col-md-4">
              <div className="card">
                <img className="card-img-top" src={user} alt="Card image cap"/>
                <div className="card-body">
									<h5 className="card-title">{base.name}</h5>
                	<p className="card-text text-secondary">$ {base.price}</p>
								</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
