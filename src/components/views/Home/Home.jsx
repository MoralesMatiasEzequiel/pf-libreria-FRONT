import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {getProducts, getProductsSales, getProductsRating, getById, getProductsOnHome, showProductsSalesOnShop, showProductsRatingOnShop } from "../../../redux/productActions";
import { postUserToBack } from "../../../redux/UserActions";
import style from "../Home/Home.module.css"
import CarouselSale from "./CarouselSale/CarouselSale";
import CarouselRating from "./CarouselRating/CarouselRating";
import { getReviews } from "../../../redux/ReviewsActions";
import CarouselComments from "./CarouselComments/CarouselComments";



const Home = () => {
  const dispatch = useDispatch()
  const { currentUser } = useSelector(state => state.user);
  const { isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductsSales())
    dispatch(getProductsRating())
    dispatch(getProductsOnHome())
    dispatch(getReviews())
    if (isAuthenticated) {
      dispatch(postUserToBack(user));
    }
  }, [dispatch, isAuthenticated])

  useEffect(() => {
    if (currentUser && !currentUser.active && isAuthenticated) {
      navigate('/userBanned');
    }
  }, [currentUser, isAuthenticated, navigate]);

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
    <div className={style.container}>
      {/*------------------------------------------- CARRUSEL PRODUCTOS EN OFERTA -----------------------------------------*/}
      <CarouselSale clickDispatch={clickDispatch} dispatchProductsSalesToShop={dispatchProductsSalesToShop} />

      {/*------------------------------------------- CARRUSEL PRODUCTOS POR RATING ---------------------------------------- */}
      <CarouselRating clickDispatch={clickDispatch} dispatchProductsRatingToShop={dispatchProductsRatingToShop} />  

      {/*------------------------------------------- CARRUSEL DE COMENTARIOS ---------------------------------------- */}  
      <CarouselComments />

    </div>
  )

}

export default Home;