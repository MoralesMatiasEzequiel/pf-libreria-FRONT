import axios from "axios";
import { addToFavorites, removeFromFavorites, updatedFavorites } from "./favoriteSlice";

export const addFavorite = (productId) => {
  return (dispatch) => {
    dispatch(addToFavorites(productId))
  }
}

export const removeFavorite = (productId) => {
  return (dispatch) => {
    dispatch(removeFromFavorites(productId))
  }
}

export const updateFavorites = (userId, favItems) => {
  return async (dispatch) => {
    let userFav = {
      _id: userId,
      favorites: favItems
    };

    const { data } = await axios.put('/user', userFav);
    console.log(data);
	
    dispatch(updatedFavorites(userFav));
}};
