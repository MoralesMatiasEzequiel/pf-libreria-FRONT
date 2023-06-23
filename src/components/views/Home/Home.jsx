import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { getProductsSales, getProductsRating, getById, getProductsOnHome, showProductsSalesOnShop, showProductsRatingOnShop } from "../../../redux/productActions";
import style from "../Home/Home.module.css"



const Home = () => {
    const dispatch = useDispatch()
    const { productsOnSale } = useSelector(state => state.products)
    const { productsOnRating } = useSelector(state => state.products)

    const { isAuthenticated, user } = useAuth0();

    const productsSales = productsOnSale.slice(0, 12)
    const productsRating = productsOnRating.slice(0, 12)

    useEffect(() => {
        dispatch(getProductsSales())
        dispatch(getProductsRating())
        dispatch(getProductsOnHome())
        if (isAuthenticated) {
          sendUserToBack(user);
        }
    }, [dispatch, isAuthenticated])

    const sendUserToBack = async (user) => {
      let newUser = {};
    
      if (user.sub && user.sub.includes('google')) {
        newUser = {
          name: user.given_name,
          nickname: user.nickname,
          email: user.email,
          picture: user.picture,
          emailVerified: user.email_verified
        };
      } else {
        newUser = {
          name: user.name,
          nickname: user.nickname,
          email: user.email,
          picture: user.picture,
          emailVerified: user.email_verified
        };
      }
    
      try {
        const userCreated = await axios.post("/user", newUser);
        
        console.log(userCreated);
      } catch (error) {
        console.error("Error al enviar el usuario al backend:", error);
      }
    };

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

    const clickDispatch = (id) => {
      dispatch(getById(id))
    }

    const dispatchProductsSalesToShop = () => {
      dispatch(showProductsSalesOnShop())
    }

    const dispatchProductsRatingToShop = () => {
      dispatch(showProductsRatingOnShop())
    }
    
    return (
        <div>
          {/*----------------- PRODUCTOS EN OFERTA -------------------*/}

            <h2 className={style.h2}>Productos en oferta <Link to={"/shop"} className={style.link}><span className={style.span}>Ver todos</span></Link></h2>

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
                        <button onClick={() => clickDispatch(product._id)} >Ver producto</button>
                      </Link>
                    </div>
                  )
                })
              }
            </Carousel>

            {/*---------------- PRODUCTOS POR RATING ----------------- */}
            
            <h2 className={style.h2}>Productos mas vendidos <Link to={"/shop"} className={style.link}><span className={style.span}>Ver todos</span></Link></h2>
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
                        <button onClick={() => clickDispatch(product._id)} >Ver producto</button>
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