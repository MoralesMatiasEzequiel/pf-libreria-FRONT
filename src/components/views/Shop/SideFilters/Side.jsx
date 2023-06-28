import style from "./SideStyle.module.css"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import { upperBrands, upperBrandsSelected } from "../../../../redux/productActions";

const Side = () => {
    const { productSee, branes, productsExist } = useSelector(state => state.products);

    const filledbrands = () => {

        let datas = localStorage.getItem("BrandsOfProductSee");
        let datasParse = JSON.parse(datas)

        if (datasParse?.length > 0 && productsExist) {
            let branis = datasParse.map(pro => pro)
            return branis;
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

        // console.log("useefec" + mapBrands());
        // console.log("state" + brands);
        let tok = mapBrands();
        if (tok.length > 0) {
            setBrands(mapBrands)
        }

        localStorage.setItem("BrandsOfProductSee", JSON.stringify(tok));

        return () => {
            localStorage.removeItem("BrandsOfProductSee")
            setBrandsSelecteds([])
        };
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
        <Accordion >
            <Accordion.Item eventKey="0">
                <Accordion.Header className={style.header}  >
                    <b>Marca</b>
                </Accordion.Header>

                <Accordion.Body >
                    <div className={`${style.contLi} ${style.brandsContainer}`}>
                        {!branes.length
                            ? brands.map((brand, i) => {
                                    return (
                                        <div key={i} className={`${style.listDispatch}`}>
                                            <input type="checkbox" value={brand} onChange={handlerClick}/>
                                            <p>{brand}</p>
                                        </div>
                                    );
                            })
                            : branes[0].map((brand, i) => {
                                    return (
                                        <div className={style.listDispatch}>
                                            <input type="checkbox" value={brand} onClick={handlerOnClick}/>
                                            <p>{brand}</p>
                                        </div>
                                    );
                            })
                        }
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default Side;

