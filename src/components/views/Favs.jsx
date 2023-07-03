import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite, clearFav } from '../../redux/favoriteActions';




const Favs = ({ favorites }) => {

    const { _id, image, name, price } = favorites;

    const dispatch = useDispatch();
  

    // remove favs item
    const removeFavsHandler = (productId) => {
			dispatch(removeFavorite(productId));
    }




    return (

        <div class="flex flex-col items-center bg-white rounded-lg shadow md:flex-row md:max-w-xl dark:bg-gray-900 ">
            <Link to={`/shop/${_id}`}>
                <img class="object-cover w-full rounded-t-lg h-96 mx-2 my-1 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="" />
            </Link>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>
                <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$ {price}</h4>
                <div className='flex flex-row  items-center py-1'>
                    <button onClick={() => removeFavsHandler(favorites)} className='dark:text-rose-600'>
										<i class="bi bi-trash"></i>
                    </button>
										
                </div>
            </div>
        </div>

    )
}

export default Favs