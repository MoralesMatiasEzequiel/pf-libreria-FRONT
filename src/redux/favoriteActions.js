import axios from "axios";
import { updatedFavorites } from "./favoriteSlice";

export const updateFavorites = (userId, favItems) => async (dispatch) => {
  let userFav = {
    _id: userId,
    favorites: favItems
  };

  const { data } = await axios.put('/user', userFav);
  console.log(data);
	
  dispatch(updatedFavorites(userFav));
};
