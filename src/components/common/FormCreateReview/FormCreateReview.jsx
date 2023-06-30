import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postReviews } from "../../../redux/ReviewsActions";
import validation from "./Validation";
import style from "../FormCreateReview/FormCreateReview.module.css"

const FormCreateReview = () => {
    const dispatch = useDispatch()
    const { currentUser } = useSelector(state => state.user)
    const [ errors, setErrors ] = useState({})
    const [ review, setReview ] = useState({
        user: currentUser._id,
        rating: 1,
        message: "",
    })

    const isDisabled = !review.message || !review.user || !review.rating || review.message.length > 200


    const handleChange = (event) => {
        setReview({
            ...review,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...review,
            [event.target.name]: event.target.value
        }))
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        const sendReview = {
            user: review.user,
            rating: parseInt(review.rating),
            message: review.message 
        }
        dispatch(postReviews(sendReview))
        setErrors({})
        setReview({
            user: currentUser._id,
            rating: 1,
            message: "",
        })
        alert("Review creada")
    }


    return (
        <div>
            <h1 className={style.h1}>Danos tu opinión sobre la tienda</h1>

            <form action="" onSubmit={handleSubmit}>
                <div className={style.contfor1y2}>
                        <div className={style.formuno}>
                            {/*------------------------- Imagen del usuario ------------------------*/}
                            <img src={currentUser.picture} alt={currentUser.nickname} className={style.image} />
                            {/*------------------------- NickName del usuario ------------------------*/}
                            <h2>{currentUser.nickname}</h2>
                          
                        </div>
                        <div className={style.formdos}>
                            {/*--------------------------------- Rating ----------------------------*/}
                            <label for="customRange2" class="form-label" className={style.label1}>Valora tu experiencia en la tienda dando un rango entre 1 - 5</label>
                            <input type="range" min="1" max="5" id="customRange2" name="rating" value={review.rating} onChange={handleChange} className={style.inputRating}  />
                            <h6>Rating = {`${review.rating}`}</h6>


                            {/*--------------------------------- Message ----------------------------*/}
                            <label for="exampleFormControlTextarea1" class="form-label" className={style.label2}>Deja una reseña sobre la tienda</label>
                            <textarea name="message" value={review.message} onChange={handleChange} class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                            {errors.message && <p className={style.errors}>{errors.message}</p>}
                        </div>
                </div>

                <button disabled={isDisabled}>Enviar Review</button>

            </form>
        </div>
    )
};

export default FormCreateReview;