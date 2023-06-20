import style from "./SideStyle.module.css"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import { upperBrands, upperBrandsSelected } from "../../../../redux/productActions";


const Side = () => {

    const dispatch = useDispatch();
    const [brands, setBrands] = useState([]);

    const [brandsSelected, setBrandsSelecteds] = useState([]);

    const { productSee, branes } = useSelector(state => state.products);

    useEffect(() => {

        let mapBrands = () => {
            let almacini = [];

            for (let i = 0; i < productSee.length; i++) {

                if (!almacini.includes(productSee[i].brand)) {
                    almacini.push(productSee[i].brand);
                }
            }

            return almacini;
        }

        setBrands(mapBrands)
    }, [productSee, branes]);

    useEffect(() => {

        console.log("STATE : " + brandsSelected);
    }, [brandsSelected]);


    const handlerClick = () => {

        dispatch(upperBrands(brands))

        console.log("brands fijos:" + brands);


    }

    const handlerOnClick = (event) => {

        let marquite = event.target.value;

        let trash2 = [];

        if (brandsSelected.find(bra => bra == marquite)) {

            console.log("lo saco: " + marquite);

            setBrandsSelecteds(brandsSelected.filter(bra => bra !== marquite))


        } else {

            console.log("lo meto :" + marquite);

            trash2.push(marquite)
            setBrandsSelecteds([...brandsSelected, trash2])

        }

        dispatch(upperBrandsSelected(brandsSelected));
    }

    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header><b>Marca</b></Accordion.Header>

                <Accordion.Body>
                    <div className={style.contLi}>
                        {!branes.length
                            ? brands.map((brand, i) => {
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
                            })
                            : branes[0].map((brand) => {
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
                            })
                        }

                    </div>
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    )

}

export default Side;

