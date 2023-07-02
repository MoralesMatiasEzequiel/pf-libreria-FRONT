import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favItems: localStorage.getItem("favItems") ? JSON.parse(localStorage.getItem("favItems")) : [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favItems.push(action.payload);
			localStorage.setItem("favItems", JSON.stringify(state.favItems));
    },
    removeFromFavorites: (state, action) => {
      state.favItems = state.favItems.filter((item) => item  !== action.payload);
			localStorage.setItem("favItems", JSON.stringify(state.favItems));
    },
		clearFavorite: (state, action) => {
			state.favItems = [];
			localStorage.setItem("favItems", JSON.stringify(state.favItems));
		},
		updatedFavorites: (state, action) => {
			//state.favItems = state.favItems;
		}
  },
});


export const { addToFavorites, removeFromFavorites, updatedFavorites, clearFavorite } = favoriteSlice.actions;


export default favoriteSlice.reducer;
