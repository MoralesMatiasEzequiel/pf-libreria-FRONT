import Pagination from 'react-bootstrap/Pagination';
import { nextPage, backPage, nextTwoPage, backTwoPage, totalPag } from "../../../../redux/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import style from "./Paginado.module.css"

const Paginado = ({ cantPages }) => {
  const dispatch = useDispatch();
  const { pag, productSee, products } = useSelector(state => state.products);

  const next = () => {
    dispatch(nextPage());
    scrollToTop();
  };

  const back = () => {
    dispatch(backPage());
    scrollToTop();
  };

  const nextTwo = () => {
    dispatch(nextTwoPage());
    scrollToTop();
  };

  const backTwo = () => {
    dispatch(backTwoPage());
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={style.pagCont}>
      <Pagination>
        {pag > 1 && <Pagination.Prev onClick={back} />}
        {pag > 2 && <Pagination.Item onClick={backTwo}>{pag - 2}</Pagination.Item>}
        {pag > 1 && <Pagination.Item onClick={back}>{pag - 1}</Pagination.Item>}

        <Pagination.Item active>{pag}</Pagination.Item>

        {pag < cantPages && <Pagination.Item onClick={next}>{pag + 1}</Pagination.Item>}
        {pag < cantPages - 1 && <Pagination.Item onClick={nextTwo}>{pag + 2}</Pagination.Item>}
        {pag < cantPages && <Pagination.Next onClick={next} />}
      </Pagination>
    </div>
  );
}

export default Paginado;
