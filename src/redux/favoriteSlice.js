import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favItems: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favItems.push(action.payload);
 
    },
    removeFromFavorites: (state, action) => {
      state.favItems = state.favItems.filter(
        (item) => item !== action.payload
        
      );
    },
		updatedFavorites: (state, action) => {
			//state.favItems = state.favItems;
		}
  },
});


export const { addToFavorites, removeFromFavorites, updatedFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
