<<<<<<< HEAD
import React from "react";
=======
import React, {useEffect} from "react";
import { getProducts } from "../../../../redux/productActions";
import {useDispatch, useSelector} from 'react-redux';
import Detail from "../Detail/Detail";
import {Link} from "react-router-dom";
>>>>>>> b5f7fbc95cd5a2199bbb75ee9336b23065026264


const Products = () => {
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
							<div className="card" >
              <Link to={'/shop/' + base.id}>
                <img className="card-img-top" src={base.image} alt="Card image cap"/>
                <div className="card-body">
									<h5 className="card-title">{base.name}</h5>
                	<p className="card-text text-secondary">$ {base.price}</p>
								</div>
							</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
