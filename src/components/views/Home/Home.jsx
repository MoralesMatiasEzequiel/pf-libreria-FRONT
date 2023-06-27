import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {getProducts, getProductsSales, getProductsRating, getById, getProductsOnHome, showProductsSalesOnShop, showProductsRatingOnShop } from "../../../redux/productActions";
import { postUserToBack } from "../../../redux/UserActions";
import style from "../Home/Home.module.css"
import CarouselSale from "./CarouselSale/CarouselSale";
import CarouselRating from "./CarouselRating/CarouselRating";



const Home = () => {
  const dispatch = useDispatch()
  const { postedUser } = useSelector(state => state.user);

  const { isAuthenticated, user } = useAuth0();


  useEffect(() => {
    dispatch(getProductsSales())
    dispatch(getProductsRating())
    dispatch(getProductsOnHome())
    if (isAuthenticated) {
      dispatch(postUserToBack(user));
    }
    if (postedUser) {
      alert('Tu usuario se ha creado');
    }
    
  }, [dispatch, isAuthenticated, postedUser])


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
      <h2 className={style.h2}>Productos en oferta <Link to={"/shop"} className={style.link}><span onClick={() => dispatchProductsSalesToShop()} className={style.span}>Ver todos</span></Link></h2>

      <CarouselSale clickDispatch={clickDispatch} />

      {/*------------------------------------------- CARRUSEL PRODUCTOS POR RATING ---------------------------------------- */}
      <h2 className={style.h2}>Productos mas vendidos <Link to={"/shop"} className={style.link}><span onClick={() => dispatchProductsRatingToShop()} className={style.span}>Ver todos</span></Link></h2>

      <CarouselRating clickDispatch={clickDispatch} />  

      {/*------------------------------------------- FALTA CARRUSEL DE COMENTARIOS ---------------------------------------- */}   

    </div>
  )

}

export default Home;