import React from "react";
import { useSelector,useDispatch } from "react-redux";
import Favs from "../Favs";
import {clearFav} from '../../../redux/favoriteActions'

const Favorites = () => {
	const dispatch = useDispatch();
	const { favItems } = useSelector((state) => state?.favorites);
	
	const clearFavoritesHandler = (productId) => {
		dispatch(clearFav(productId));
	};
	return (
			<>

					<div className='h-screen dark:bg-gray-800'>
							<div className='container mx-auto px-2 py-3'>
									<h1 className='text-4xl text-center py-5  dark:text-gray-200'>❤️ Lista de favoritos ❤️</h1>
									<div>
									<button type="button" onClick={() => clearFavoritesHandler()} className='btn btn-secondary btn-lg btn-block'>
										<i class="bi bi-trash">CLEAR FAVORITES</i>
                    </button>
									</div>
									<div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center'>
											{
													favItems?.map((favorites) => {
															return <Favs key={favorites?._id} favorites={favorites} />
													})
											}
									</div>
							</div>

					</div>


			</>
	)
}

export default Favorites;