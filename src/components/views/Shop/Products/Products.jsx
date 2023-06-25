import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { totalPag } from "../../../../redux/productActions";
import { addProductOnCart } from "../../../../redux/CartActions";
import Paginado from "../Paginado/Paginado";
//import { addToFavList } from "../../../../redux/favoriteSlice";
import ModalCart from "../../../common/Modals/ModalCart/ModalCart";
import style from "./Products.module.css";

const Products = () => {


  const filledcart = () => {

    let datas = localStorage.getItem("protucts_cart");
    let datasParse = JSON.parse(datas)
    if (datas?.length > 0) {
      let cartId = datasParse.map(pro => pro._id)
      return cartId;
    } else {
      return ["nada"]
    }
  };


  const dispatch = useDispatch();

  const [allProducts, setAllProducts] = useState([]);

  const [productsInCart, setProductsInCart] = useState(filledcart());

  const { productSee, pag, productsExist, brandSelected } = useSelector(
    (state) => state.products
  );



  const [pagines, setPagines] = useState([]);

  const [productsInCart, setProductsInCart] = useState(filledcart());

  const { productSee, pag, productsExist, brandSelected } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (brandSelected.length > 0) {
      let papeliri = productSee.filter((pro) =>
        brandSelected.includes(pro.brand)
      );
      setAllProducts(papeliri);
    } else {
      setAllProducts(productSee);
    }

  }, [brandSelected, productSee, productsInCart]);

  let desde = (pag - 1) * 12;
  let hasta = pag * 12;
  const viewsProducts = allProducts.slice(desde, hasta);


  useEffect(() => {
    let cantPages = Math.round(allProducts.length / 12 + 0.4);
    setPagines(cantPages);
    dispatch(totalPag(cantPages));
  }, [allProducts]);

  const addToCart = (product) => {
    dispatch(addProductOnCart(product));
    setProductsInCart([...productsInCart, product._id]);

    let datas = localStorage.getItem("protucts_cart");
    if (!datas) {
      localStorage.setItem("protucts_cart", JSON.stringify([product]));
    } else {
      let newdata = JSON.parse(datas);
      newdata.push(product);
      localStorage.setItem("protucts_cart", JSON.stringify(newdata));
    }
  };
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

  //------------------------------------FAVORITE STAT
  //const dispatch = useDispatch();
  // const favoriteHandler = (viewsProducts) => {
  //   dispatch(addToFavList(viewsProducts));
  // };

  return (
    <div className={style.totalContainer}>
      <Paginado cantPages={pagines} />
      <div className={style.container}>
        {!productsExist && (
          <div className={style.noProduct}>
            <img
              className={style.lupa}
              src="https://i.pinimg.com/originals/b8/d3/ed/b8d3ed745629d309fe813cb2ede52b9a.png"
              alt=""
            />
            <ul className={style.lista}>
              <h4 className={style.subtitulo}>
                No hay productos que coincidan con tu búsqueda
              </h4>
              <li>Revisá la ortografía de la palabra.</li>
              <li>Utilizá palabras más genéricas o menos palabras.</li>
              <li>
                Navegá por las categorías para encontrar un producto similar
              </li>
            </ul>
          </div>
        )}

        {viewsProducts.map((base, index) => {
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
                      {" "}
                      {/*onClick={()=> navigate('/home')}*/}
                      <i className="bi bi-heart"></i>
                    </button>
                    {productsInCart.includes(base._id) ? (
                      <i class="bi bi-cart-check"></i>
                    ) : (
                      <button
                        onClick={() => {
                          setModalShow(true);
                          addToCart(base);
                        }}
                      >
                        <i className="bi bi-cart"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* <ModalCart show={modalShow} onHide={() => setModalShow(false)} /> */}
      </div>
      <Paginado className={style.paginado} cantPages={pagines} />

    </div>
  );
};

export default Products;
