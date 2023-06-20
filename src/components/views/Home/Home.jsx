import React from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import { getProductsSales, getProductsRating } from "../../../redux/productActions";
import style from "../Home/Home.module.css"



const Home = () => {
    // const dispatch = useDispatch()
    // const { productsOnSale } = useSelector(state => state.products)
    // const { productsOnRating } = useSelector(state => state.products)

    // const productsSales = productsOnSale.slice(0, 3)
    // const productsRating = productsOnRating.slice(0, 3)


    // useEffect(() => {
    //     dispatch(getProductsSales())
    //     dispatch(getProductsRating())
    // }, [dispatch])

    
    
    return (
        <div>
            <h2 className={style.h2}>Productos en oferta:</h2>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div className={style.contianerCarr}>
                    <button className={style.buttons} type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4dS2A3c1cYVG3BdUZDuV3SQc1hgobg7zWGxlSUD3DTg-1Fd4rDAilbpvj4ywYNWe55nI&usqp=CAU" class="d-block w-100" alt="libreta" className={style.image} />
                        </div>
                        <div class="carousel-item">
                        <img src="https://assets.theplace.com/image/upload/t_pdp_img_m,f_auto,q_auto/v1/ecom/assets/products/tcp/3031291/3031291_BQ-1.jpg" class="d-block w-100" alt="mochila de spiderman" className={style.image} />
                        </div>
                        <div class="carousel-item">
                        <img src="https://1.bp.blogspot.com/-0y6emndBFig/Tz2Spck4gpI/AAAAAAAAgnE/qDV5Sqkt_Tw/s1600/TOP3-%2Bmochila%2B%2524239.JPG" class="d-block w-100" alt="mochila del barcelona" className={style.image} />
                        </div>
                    </div>
                    <button className={style.buttons} type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>               
            </div>

            <h2 className={style.h2}>Productos con mayor demanda:</h2>
            <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div className={style.contianerCarr}>
                    <button className={style.buttons} type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_682625-MLA53484861510_012023-W.jpg" class="d-block w-100" alt="mochila de messi" className={style.image} />
                        </div>
                        <div class="carousel-item">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_718449-MCO53217255587_012023-O.webp" class="d-block w-100" alt="libreta de messi" className={style.image} />
                        </div>
                        <div class="carousel-item">
                        <img src="https://d22fxaf9t8d39k.cloudfront.net/7d32e398e56cbab767df66dd8e38ba8487b4e3dd3c7c79eac73adb0e2d16c54352085.png" class="d-block w-100" alt="lapicera de messi" className={style.image} />
                        </div>
                    </div>
                    <button className={style.buttons} type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                
            </div>
        </div>
    )

}

export default Home;