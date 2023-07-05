import React from "react"; //
import 'react-multi-carousel/lib/styles.css'; //
import Carousel from 'react-multi-carousel'; //
import { useSelector } from "react-redux"; //
import { Link } from "react-router-dom"; //
import style from "../CarouselRating/CarouselRating.module.css"


const CarouselRating = ({ clickDispatch, dispatchProductsRatingToShop }) => {
    const { productsOnRating } = useSelector(state => state.products) //
    const productsRating = productsOnRating.slice(0, 12) //

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
      <>
          {
            !!productsRating.length && <h2 className={style.h2}>Productos mas vendidos <Link to={"/shop"} className={style.link}><span onClick={() => dispatchProductsRatingToShop()} className={style.span}>Ver todos</span></Link></h2>
          }

          <Carousel responsive={responsive} className={style.carousel} infinite={true} >
            {
              productsRating && productsRating.map((product, index) => {
                return (
                  <div key={index} className={style.card} >
                    <img className={style.productImage} src={product.image} alt={product.name} />
                    <h5>{product.name}</h5>
                    <p className={style.rating}>
                      {Array.from({ length: product.rating }).map((_, index) => (
                        <i key={index} className="bi bi-star-fill"></i>
                      ))}
                    </p>
                    <p className={style.priceNow}>Precio: ${product.price}</p>
                    <Link to={`/shop/${product._id}`}>
                      <button onClick={() => clickDispatch(product._id)} >Ver producto</button>
                    </Link>
                  </div>
                )
              })
            }
          </Carousel>
                   
      </>
    )
};


export default CarouselRating;
