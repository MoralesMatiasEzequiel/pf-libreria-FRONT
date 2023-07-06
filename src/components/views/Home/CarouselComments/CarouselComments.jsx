import React from "react";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "../CarouselComments/CarouselComments.module.css"
import { useAuth0 } from "@auth0/auth0-react";


const CarouselComments = () => {
    const { usersReviews } = useSelector(state => state.reviews)
    const reviews = usersReviews
    const { isAuthenticated } = useAuth0();

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

    const profileActive = isAuthenticated 
    ? (<Link to={"/createShopReview"} className={style.link}><span className={style.span}>Crear review</span></Link>) 
    : (<Link to={"/login"} className={style.link}><span className={style.span}>Ingresar para dejar review</span></Link>) 

    return (
        <>
            {
                !!reviews.length && <h2 className={style.h2}>Reviews de usuarios sobre la tienda {profileActive}</h2> 
            }

            <Carousel responsive={responsive} className={style.carousel} infinite={true} >
                {
                reviews && reviews.map((review, index) => {
                    if (review.userNickname && review.rating && review.message) {
                        return (
                          <div key={index} className={style.card}>
                            <h5 className={style.userNickname}>{review.userNickname}</h5>
                            <p className={style.rating}>
                              {Array.from({ length: review.rating }).map((_, index) => (
                                <i key={index} className="bi bi-star-fill"></i>
                              ))}
                            </p>
                            <p className={style.message}>{review.message}</p>
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