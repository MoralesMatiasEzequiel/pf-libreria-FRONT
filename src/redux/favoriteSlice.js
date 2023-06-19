	import { createSlice } from "@reduxjs/toolkit";

	const initialState = {
		favItems: localStorage.getItem("favItems")
			? JSON.parse(localStorage.getItem("favItems"))
			: [],
	};

	export const favItemSlice = createSlice({
		name: "favorites",
		initialState,
		reducers: {
			//addItems
			addToFavList: (state, action) => {
				let eachFavproductIndex = state.favItems.findIndex(
					(item) => item?._id === action.payload?._id
				);
				if (eachFavproductIndex >= 0) {
					alert("Ya tienes agregado este Item en tu lista de Favoritos!");
				} else {
					let assembledItem;
					assembledItem = { ...action.payload };
					state.favItems.push(assembledItem);
					localStorage.setItem("favoritelistItems", JSON.stringify(state.favItems));
				}
			},

			//removeItems
			removeFavlist: (state, action) => {

				const updatedFavlists = state.favItems?.filter((item) => item?._id !== action.payload?._id)

				state.favItems = updatedFavlists;

				localStorage.setItem("favoritelistItems", JSON.stringify(state.favItems));

		},

		//ClearItems
		clearFavlists: (state, action) => {
				state.favItems = [];
				localStorage.setItem("favoritelistItems", JSON.stringify(state.favItems));
		}
		},
	});

	//exports

	export const { addToFavList, removeFavlist, clearFavlists } =
	favItemSlice.actions;

	export default favItemSlice.reducer;
