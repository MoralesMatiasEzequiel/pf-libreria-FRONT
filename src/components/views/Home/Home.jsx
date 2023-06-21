import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsSales, getProductsRating } from "../../../redux/productActions";
import style from "../Home/Home.module.css"



const Home = () => {
    const dispatch = useDispatch()
    const { productsOnSale } = useSelector(state => state.products)
    const { productsOnRating } = useSelector(state => state.products)

    const productsSales = productsOnSale.slice(0, 12)
    const productsRating = productsOnRating.slice(0, 12)

    useEffect(() => {
        dispatch(getProductsSales())
        dispatch(getProductsRating())
    }, [dispatch])

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    
    
    return (
        <div>
          <h1>TU LIBRITO WEB</h1>
          {/*----------------- PRODUCTOS EN OFERTA -------------------*/}
            <h2 className={style.h2}>Productos en oferta <Link to={"/shop"} className={style.link}><span className={style.span}>Ver todas</span></Link></h2>
            <Carousel responsive={responsive} className={style.carousel} infinite={true} >
              {
                productsSales && productsSales.map((product, index) => {
                  return (
                    <div key={index} className={style.card} >
                      <img className={style.productImage} src={product.image} alt={product.name} />
                      <h5>{product.name}</h5>
                      <p className={style.priceBefore}>Antes: ${product.price}</p>
                      <p className={style.priceNow}>Ahora: ${product.salePrice}</p>
                      <Link to={`/shop/${product._id}`}>
                        <button>Ver producto</button>
                      </Link>
                    </div>
                  )
                })
              }
            </Carousel>

            {/*---------------- PRODUCTOS POR RATING ----------------- */}
            <h2 className={style.h2}>Productos mas vendidos <Link to={"/shop"} className={style.link}><span className={style.span}>Ver todas</span></Link></h2>
            <Carousel responsive={responsive} className={style.carousel} infinite={true} >
              {
                productsRating && productsRating.map((product, index) => {
                  return (
                    <div key={index} className={style.card} >
                      <img className={style.productImage} src={product.image} alt={product.name} />
                      <h5>{product.name}</h5>
                      <p className={style.rating}>Rating: {product.rating}</p>
                      <p className={style.priceNow}>Precio: ${product.price}</p>
                      <Link to={`/shop/${product._id}`}>
                        <button>Ver producto</button>
                      </Link>
                    </div>
                  )
                })
              }
            </Carousel>

            
                
            
        </div>
    )

}

export default Home;