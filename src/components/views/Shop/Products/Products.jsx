import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
//import { addToFavList } from "../../../../redux/favoriteSlice";
import ModalCart from "../../../common/Modals/ModalCart/ModalCart";
import style from "./Products.module.css";

const Products = () => {
  const { productSee, pag, productsExist, brandSelected } = useSelector(
    (state) => state.products
  );

  let desde = (pag - 1) * 12;
  let hasta = pag * 12;
  const viewsProducts = productSee.slice(desde, hasta);

  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

  //------------------------------------FAVORITE STAT
  //const dispatch = useDispatch();
  // const favoriteHandler = (viewsProducts) => {
  //   dispatch(addToFavList(viewsProducts));
  // };

  return (

    <div className={style.container}>
      {!productsExist && (
        <p>No hay productos asociados a esa búsqueda o categoría.</p>
      )}
      {!brandSelected.length && viewsProducts.map((base, index) => {
        return (
          <div key={index} className={style.productCard}>
            <Link to={"/shop/" + base._id}>
              <div className={style.productTumb}>
                <img src={base.image} alt={base.name} />
              </div>
            </Link>
            <div className={style.productDetails}>
              <Link className={style.link} to={"/shop/" + base._id}>
                <h4 className={style.title}>{base.name}</h4>
              </Link>
              <div className={style.productBottomDetails}>
                <div className={style.productPrice}>
                  <small>${base.price}</small>
                </div>
                <div className={style.productLinks}>
                  <button> 	{/*onClick={()=> navigate('/home')}*/}
                    <i className="bi bi-heart"></i>
                  </button>
                  <button onClick={() => setModalShow(true)}>
                    <i className="bi bi-cart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {viewsProducts.map((base, index) => {
        if (brandSelected.includes(base.brand)) {
          return (
            <div key={index} className={style.productCard}>
              <Link to={"/shop/" + base._id}>
                <div className={style.productTumb}>
                  <img src={base.image} alt={base.name} />
                </div>
              </Link>
              <div className={style.productDetails}>
                <Link className={style.link} to={"/shop/" + base._id}>
                  <h4 className={style.title}>{base.name}</h4>
                </Link>
                <div className={style.productBottomDetails}>
                  <div className={style.productPrice}>
                    <small>${base.price}</small>
                  </div>
                  <div className={style.productLinks}>
                    <button>
                      <i className="bi bi-heart"></i>
                    </button>
                    <button onClick={() => setModalShow(true)}>
                      <i className="bi bi-cart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      })}

      {/* <ModalCart show={modalShow} onHide={() => setModalShow(false)} /> */}
    </div>

  );
};

export default Products;


