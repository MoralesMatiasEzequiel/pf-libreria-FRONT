import Pagination from 'react-bootstrap/Pagination';

import { nextPage, backPage, nextTwoPage, backTwoPage } from "../../../../redux/productActions";
import { useDispatch, useSelector } from "react-redux";


import style from "./Paginado.module.css"



const Paginado = ({ cantPages }) => {


    const dispatch = useDispatch();
    const { pag } = useSelector(state => state.products);

    const next = () => {
        dispatch(nextPage())
    }
    const back = () => {
        dispatch(backPage())
    }
    const nextTwo = () => {
        dispatch(nextTwoPage())
    }
    const backTwo = () => {
        dispatch(backTwoPage())
    }

    return (
        <div className={style.pagCont}>
            < Pagination >
                {pag > 1 && <Pagination.Prev onClick={back} />}
                {pag > 2 && <Pagination.Item onClick={backTwo} >{pag - 2}</Pagination.Item>}
                {pag > 1 && <Pagination.Item onClick={back} >{pag - 1}</Pagination.Item>}

                <Pagination.Item active>{pag}</Pagination.Item>

                {pag < cantPages && <Pagination.Item onClick={next} >{pag + 1}</Pagination.Item>}
                {pag < cantPages - 1  && <Pagination.Item onClick={nextTwo} >{pag + 2}</Pagination.Item>}
                {pag < cantPages  && <Pagination.Next onClick={next} />}
            </Pagination >
        </div>
    );
}

export default Paginado;