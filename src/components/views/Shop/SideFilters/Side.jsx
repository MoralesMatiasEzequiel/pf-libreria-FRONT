import style from "./SideStyle.module.css"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import { upperBrands, upperBrandsSelected } from "../../../../redux/productActions";


const Side = () => {
    const { productSee, branes } = useSelector(state => state.products);

    const filledbrands = () => {

        let datas = localStorage.getItem("ProductSee");
        let datasParse = JSON.parse(datas)

        if (datas?.length > 0 && productSee.length < 1 ) {
            let cartId = datasParse.map(pro => pro.brand)
            return cartId;
        } else {
            return []
        }
    };
    const dispatch = useDispatch();
    const [brands, setBrands] = useState(filledbrands());

    const [brandsSelected, setBrandsSelecteds] = useState([]);


    useEffect(() => {

        let mapBrands = () => {
            let almacini = [];

            for (let i = 0; i < productSee.length; i++) {

                if (!almacini.includes(productSee[i].brand)) {
                    almacini.push(productSee[i].brand);
                }
            }
            almacini = almacini.sort((a, b) => {
                const noa = a.toLowerCase();
                const noe = b.toLowerCase();

                if (noa < noe) {
                    return -1;
                }
                if (noa > noe) {
                    return 1;
                }
                return 0;
            })
            return almacini;
        }

        setBrands(mapBrands)

        return () => setBrandsSelecteds([]);
    }, [productSee, branes]);


    const handlerClick = () => {

        dispatch(upperBrands(brands))
    }


    const handlerOnClick = (event) => {
        const marquite = event.target.value;

        const estateBrand = brandsSelected.includes(marquite);
        const updateBrand = estateBrand

            ? brandsSelected.filter((bra) => bra !== marquite)
            : [...brandsSelected, marquite];

        setBrandsSelecteds(updateBrand);
        dispatch(upperBrandsSelected(updateBrand));
    };



    return (

        <Accordion  >
            <Accordion.Item eventKey="0" >

                <Accordion.Header className={style.header} >
                    <b>Marca</b>
                </Accordion.Header>

                <Accordion.Body  >
                    <div className={style.contLi} >
                        {!branes.length
                            ? brands.map((brand, i) => {
                                if (i < 20) {
                                    return (
                                        <div key={i} className={style.listDispatch}
                                        >
                                            <input type="checkbox"

                                                value={brand}

                                                onChange={handlerClick}
                                            />
                                            <p>{brand}</p>
                                        </div>
                                    );
                                }
                            })
                            : branes[0].map((brand, i) => {
                                if (i < 20) {
                                    return (
                                        <div className={style.listDispatch}
                                        >
                                            <input type="checkbox"

                                                value={brand}
                                                onClick={handlerOnClick}
                                            />
                                            <p>{brand}</p>
                                        </div>
                                    );
                                }
                            })
                        }

                    </div>
                </Accordion.Body>
            </Accordion.Item>

            {brands.length > 20 && <Accordion.Item eventKey="1">
                <Accordion.Header className={style.header}  >
                    <b>Marca - 2</b>
                </Accordion.Header>

                <Accordion.Body >
                    <div className={style.contLi}>
                        {!branes.length
                            ? brands.map((brand, i) => {
                                if (i > 20) {
                                    return (
                                        <div key={i} className={style.listDispatch}
                                        >
                                            <input type="checkbox"

                                                value={brand}

                                                onChange={handlerClick}
                                            />
                                            <p>{brand}</p>
                                        </div>
                                    );
                                }
                            })
                            : branes[0].map((brand, i) => {
                                if (i > 20) {
                                    return (
                                        <div className={style.listDispatch}
                                        >
                                            <input type="checkbox"

                                                value={brand}
                                                onClick={handlerOnClick}
                                            />
                                            <p>{brand}</p>
                                        </div>
                                    );
                                }
                            })
                        }

                    </div>
                </Accordion.Body>
            </Accordion.Item>}

        </Accordion>

    )

}

export default Side;

