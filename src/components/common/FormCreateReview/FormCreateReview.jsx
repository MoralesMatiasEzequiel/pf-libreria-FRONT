import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postReviews } from "../../../redux/ReviewsActions";
import validation from "./Validation";
import style from "../FormCreateReview/FormCreateReview.module.css";

const FormCreateReview = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [errors, setErrors] = useState({});
  const [review, setReview] = useState({
    user: currentUser._id,
    rating: 1,
    message: "",
  });

  const isDisabled =
    !review.message ||
    !review.user ||
    !review.rating ||
    review.message.length > 200;

  const handleChange = (event) => {
    setReview({
      ...review,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...review,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleStarClick = (rating) => {
    setReview({
      ...review,
      rating: rating,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const sendReview = {
      user: review.user,
      rating: parseInt(review.rating),
      message: review.message,
    };
    dispatch(postReviews(sendReview));
    setErrors({});
    setReview({
      user: currentUser._id,
      rating: 1,
      message: "",
    });
    alert("Review creada");
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= review.rating ? "star active" : "star";
      const starStyle = {
        color: i <= review.rating ? "#FF9E5C" : "#ccc",
      };
      stars.push(
        <span key={i} className={style.starClass} data-value={i} onClick={() => handleStarClick(i)}>
          <i className="bi bi-star" style={starStyle}> </i>
        </span>
      );
    }
    return stars;
  };
  

  return (
    <div>
      <h2 className={style.h1}>Deja tu opinión sobre la tienda</h2>

      <form action="" onSubmit={handleSubmit}>
        <div className={style.contfor1y2}>
          <div className={style.formuno}>
            {/*------------------------- Imagen del usuario ------------------------*/}
            <img
              src={currentUser.picture}
              alt={currentUser.nickname}
              className={style.image}
            />
            {/*------------------------- NickName del usuario ------------------------*/}
            <h2>{currentUser.nickname}</h2>
          </div>

          <div className={style.formdos}>
            {/*--------------------------------- Rating ----------------------------*/}
            <label
              htmlFor="customRange2"
              className={`form-label ${style.label1}`}
            >
              Califica tu experiencia en la tienda de 1 a 5 estrellas :
            </label>
            <div className="star-rating">{renderStars()}</div>

            <h6>Estrellas : {`${review.rating}`}</h6>

            {/*--------------------------------- Message ----------------------------*/}
            <label
              htmlFor="exampleFormControlTextarea1"
              className={`form-label ${style.label2}`}
            >
              Deja una reseña sobre la tienda :
            </label>
            <textarea
              name="message"
              value={review.message}
              onChange={handleChange}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
            ></textarea>
            {errors.message && (
              <p className={style.errors}>{errors.message}</p>
            )}
          </div>
        </div>

        <button className={style.enviarBtn} disabled={isDisabled}>Enviar Review</button>
      </form>
    </div>
  );
};

export default FormCreateReview;
