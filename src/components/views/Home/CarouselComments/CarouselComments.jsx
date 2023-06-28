import React from "react";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "../CarouselComments/CarouselComments.module.css"


const CarouselComments = () => {
    const { usersReviews } = useSelector(state => state.reviews)
    const reviews = usersReviews.slice(0, 15)

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
                !!reviews.length && <h2 className={style.h2}>Reviews de usuarios sobre la tienda <Link to={"/createShopReview"} className={style.link}><span className={style.span}>Hacer review</span></Link></h2> 
            }

            <Carousel responsive={responsive} className={style.carousel} infinite={true} >
                {
                reviews && reviews.map((review, index) => {
                    if (review.userNickname && review.rating && review.message) {
                        return (
                        <div key={index} className={style.card} >
                            <h5>{review.userNickname}</h5>
                            <p>{review.rating}</p>
                            <p>{review.message}</p>
                        </div>
                        )
                    }
                })
                }
            </Carousel>
        </>
    )
};

export default CarouselComments;