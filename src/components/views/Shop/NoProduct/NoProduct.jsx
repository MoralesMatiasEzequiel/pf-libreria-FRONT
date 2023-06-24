import React from 'react';
import style from './NoProduct.module.css';

const NoProduct = () => {
  return (
    <div className={style.noProduct}>
      <img
        className={style.lupa}
        src="https://i.pinimg.com/originals/b8/d3/ed/b8d3ed745629d309fe813cb2ede52b9a.png"
        alt=""
      />
      <ul className={style.lista}>
        <h4 className={style.subtitulo}>
          No hay productos que coincidan con tu búsqueda
        </h4>
        <li>Revisá la ortografía de la palabra.</li>
        <li>Utilizá palabras más genéricas o menos palabras.</li>
        <li>Navegá por las categorías para encontrar un producto similar</li>
      </ul>
    </div>
  );
};

export default NoProduct;
