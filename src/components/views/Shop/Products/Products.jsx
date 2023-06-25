import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
//import { totalPag } from "../../../../redux/productActions";
import { addProductOnCart } from "../../../../redux/CartActions"
//import { addToFavList } from "../../../../redux/favoriteSlice";
import ModalCart from "../../../common/Modals/ModalCart/ModalCart";
import style from "./Products.module.css";

const Products = () => {
  const { productSee, pag, productsExist, brandSelected } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();
  const [allProducts, setAllProducts] = useState([]);


  useEffect(() => {

    if (brandSelected.length > 0) {
      let papeliri = productSee.filter(pro => brandSelected.includes(pro.brand))
      setAllProducts(papeliri)
    } else {
      setAllProducts(productSee)
    }


  }, [brandSelected, productSee]);

  let desde = (pag - 1) * 12;
  let hasta = pag * 12;
  const viewsProducts = allProducts.slice(desde, hasta);


  


  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

  const addToCart = (product) => {
    dispatch(addProductOnCart(product))
    let datas = localStorage.getItem("protucts_cart");
    if (!datas) {
      localStorage.setItem("protucts_cart", JSON.stringify([product]))
    } else {
      let newdata = JSON.parse(datas)
      newdata.push(product)
      localStorage.setItem("protucts_cart", JSON.stringify(newdata))
    }
  }

  //------------------------------------FAVORITE STAT
  //const dispatch = useDispatch();
  // const favoriteHandler = (viewsProducts) => {
  //   dispatch(addToFavList(viewsProducts));
  // };

  return (
    <div className={style.container}>
        {!productsExist && (
        <div className={style.noProduct}>
          {navigate("/no-product/")}
        </div>)}

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
                  <button onClick={() => { setModalShow(true); addToCart(base) }}>
                    <i className="bi bi-cart"></i>
                  </button>
                </div>

              </div>
            </div>
          </div>
        )
      })}

      {brandSelected.length > 0 && viewsProducts.map((base, index) => {

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
                  <button onClick={() => { setModalShow(true); addToCart(base) }}>
                    <i className="bi bi-cart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* <ModalCart show={modalShow} onHide={() => setModalShow(false)} /> */}

    </div>
  );
};

export default Products;
