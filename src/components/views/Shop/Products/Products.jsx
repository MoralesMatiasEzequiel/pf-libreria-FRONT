import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavList } from "../../../../redux/favoriteSlice";
import "./Products.css";

const Products = () => {
  const { productSee, pag, productsExist } = useSelector(
    (state) => state.products
  );

  let desde = (pag - 1) * 12;
  let hasta = pag * 12;
  const viewsProducts = productSee.slice(desde, hasta);
  const dispatch = useDispatch();

  const favoriteHandler = (viewsProducts) => {
    dispatch(addToFavList(viewsProducts));
  };

  return (
    <div class="container">
      <div class="row">
        {!productsExist && (
          <p>No hay productos asociados a esa búsqueda o categoría.</p>
        )}
        {viewsProducts.map((base, index) => {
          return (
            <div key={index} class="col-md-3 ">
              <div class="card">
                <Link to={"/shop/" + base._id}>
                  <div class="card-body">
                    <img
                      className="card-img-top"
                      src={base.image}
                      alt={base.name}
                    />
                    <h5 class="card-title text-decoration-none">{base.name}</h5>
                    <p class="card-text text-secondary text-decoration-none">
                      $ {base.price}
                    </p>
                  </div>
                </Link>
                <div class="d-grid gap-2 d-md-block">
                  <button class="btn btn-primary">
                    <i class="bi bi-cart"></i> Agregar al carrito
                  </button>
                  <button
                    onClick={() => {
                      favoriteHandler(viewsProducts);
                    }}
                    class="btn btn-outline-danger"
                  >
                    <i class="bi bi-heart"></i> Favoritos
                  </button>
                </div>
              </div>
              ;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

{
  /* <div class="card">
  <Link to={"/shop/" + base._id}>
    <div class="card-body">
      <img className="card-img-top" src={base.image} alt={base.name} />
      <h5 class="card-title text-decoration-none">{base.name}</h5>
      <p class="card-text text-secondary text-decoration-none">
        $ {base.price}
      </p>
    </div>
  </Link>
  <div class="d-grid gap-2 d-md-block">
    <button class="btn btn-primary">
      <i class="bi bi-cart"></i> Agregar al carrito
    </button>
    <button
      onClick={() => {
        favoriteHandler(viewsProducts);
      }}
      class="btn btn-outline-danger"
    >
      <i class="bi bi-heart"></i> Favoritos
    </button>
  </div>
</div>; */
}
