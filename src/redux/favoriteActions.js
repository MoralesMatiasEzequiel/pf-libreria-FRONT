import axios from "axios";
import { addToFavorites, removeFromFavorites, updatedFavorites, clearFavorite } from "./favoriteSlice";

import { createSelector } from '@reduxjs/toolkit';

export const selectFavorites = createSelector(
  (state) => state.favorites.favItems,
  (favItems) => favItems
);

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
export const clearFav = (productId) => {
  return (dispatch) => {
    dispatch(clearFavorite(productId))
  }
}

export const updateFavorites = (userId, favItems) => {
  return async (dispatch) => {
    let userFav = {
      _id: userId,
      favorites: favItems
    };

    const { data } = await axios.put('/user', userFav);
	
    dispatch(updatedFavorites(userFav));
}};
