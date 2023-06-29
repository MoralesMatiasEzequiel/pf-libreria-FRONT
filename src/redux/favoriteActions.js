import axios from "axios";
import { addToFavorites, removeFromFavorites, updatedFavorites } from "./favoriteSlice";

export const updateFavorites = (userId, favorites) => async (dispatch) => {
  let userFav = {
    _id: userId,
    favorites: favorites
  };

  const { data } = await axios.put('/user', userFav);
  console.log(data.favorites);
  dispatch(updatedFavorites(userFav));
};
