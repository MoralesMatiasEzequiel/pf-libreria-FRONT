import React from "react"; //
import 'react-multi-carousel/lib/styles.css'; //
import Carousel from 'react-multi-carousel'; //
import { useSelector } from "react-redux"; //
import { Link } from "react-router-dom"; //
import style from "../CarouselSale/CarouselSale.module.css"

const CarouselSale = ({ clickDispatch, dispatchProductsSalesToShop }) => {
    const { productsOnSale } = useSelector(state => state.products) //
    const productsSales = productsOnSale.slice(0, 12) //  

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
            !!productsSales.length && <h2 className={style.h2}>Productos en oferta <Link to={"/shop"} className={style.link}><span onClick={() => dispatchProductsSalesToShop()} className={style.span}>Ver todos</span></Link></h2>
          }
        
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
        </>
    )

};


export default CarouselSale;