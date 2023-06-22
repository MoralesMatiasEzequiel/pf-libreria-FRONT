import React from "react";
import style from "./Form.module.css";
import Navuno from "../../common/Nav/Nav";
import Validation from "./Validation";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../redux/productActions";
import { NavLink } from "react-router-dom"

const Dashboard = () => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});

    const [newProduct, setNewProduct] = useState({
        name: "",
        brand: "",
        stock: 0,
        price: 0,
        salePrice: 0,
        description: "",
        image: "",
        rating: 0,
        subcategories: [],
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewProduct((prevState) => ({
            ...prevState,
            [name]: name === "price" || name === "salePrice" ? parseFloat(value) : value,
        }));
        setErrors(
            Validation({
                ...newProduct,
                [event.target.name]: event.target.value,
            })
        );
    };

    const handleSubcaty = (event) => {
        setNewProduct({
            ...newProduct,
            subcategories: [event.target.value],
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        dispatch(createProduct(newProduct));

        setNewProduct({
            name: "",
            brand: "",
            stock: 0,
            price: 0,
            salePrice: 0,
            description: "",
            image: "",
            rating: 1,
            subcategories: [],
        });
    };

    useEffect(() => { }, [newProduct]);

    return (
        <div className={style.formcont}>
            <Navuno />
            <div className={style.oneLine}>
                <NavLink to={"/admin"}>
                    <p>Volver al Dashboard</p>
                </NavLink>
                <h1 className={style.title}>subir producto</h1>

            </div>

            <form action="" className={style.form} onSubmit={handleSubmit}>
                <div className={style.contfor1y2}>
                    <div className={style.formuno}>
                        <label htmlFor="name">Nombre</label>
                        <input
                            name="name"
                            value={newProduct.name}
                            type="text"
                            onChange={handleChange}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}

                        <label htmlFor="brand">Marca</label>
                        <input
                            name="brand"
                            value={newProduct.brand}
                            type="text"
                            onChange={handleChange}
                        />
                        {errors.brand && <p className="error">{errors.brand}</p>}

                        <label htmlFor="stock">Stock disponible</label>
                        <input
                            name="stock"
                            value={newProduct.stock}
                            type="number"
                            onChange={handleChange}
                        />
                        {errors.stock && <p className="error">{errors.stock}</p>}

                        <label htmlFor="price">Precio</label>
                        <input
                            name="price"
                            value={newProduct.price}
                            type="number"
                            onChange={handleChange}
                        />
                        {errors.price && <p className="error">{errors.price}</p>}

                        <label htmlFor="salePrice">Precio de descuento</label>
                        <input
                            name="salePrice"
                            value={newProduct.salePrice}
                            type="number"
                            onChange={handleChange}
                        />
                        {errors.salePrice && <p className="error">{errors.salePrice}</p>}
                    </div>
                    <div className={style.formdos}>
                        <label htmlFor="description">Descripcion</label>
                        <input
                            name="description"
                            value={newProduct.description}
                            type="text"
                            onChange={handleChange}
                            rows="10"
                            cols="50"
                        />
                        {errors.description && <p className="error">{errors.description}</p>}

                        <label htmlFor="image">Imagen</label>
                        <input
                            name="image"
                            value={newProduct.image}
                            type="text"
                            onChange={handleChange}
                        />
                        {errors.image && <p className="error">{errors.image}</p>}

                        <label htmlFor="subcategories">ID de la Subcategoria</label>
                        <input
                            name="subcategories"
                            value={newProduct.subcategories}
                            type="text"
                            onChange={handleSubcaty}
                        />
                        {errors.subcategories && <p className="error">{errors.subcategories}</p>}
                    </div>
                </div>

                <button disabled={!newProduct.brand || !newProduct.description || !newProduct.name || !newProduct.image || errors.name || errors.brand || errors.image || errors.description || errors.stock || errors.price}>Enviar</button>
            </form>
        </div>
    );
};

export default Dashboard;