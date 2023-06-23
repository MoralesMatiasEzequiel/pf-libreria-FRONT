import './App.css';
import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

const Navuno = lazy(() => import('./components/common/Nav/Nav'));
const Menu = lazy(() => import('./components/common/Menu/Menu'));
const Footer = lazy(() => import('./components/common/Footer/Footer'));
const Home = lazy(() => import('./components/views/Home/Home'));
const About = lazy(() => import('./components/views/About/About'));
const Shop = lazy(() => import('./components/views/Shop/Shop'));
const Cart = lazy(() => import('./components/views/Cart/Cart'));
const Detail = lazy(() => import('./components/views/Shop/Detail/Detail'));
const Arrepentimiento = lazy(() => import('./components/views/Arrepentimiento/Arrepentimiento'));
const CartProducts = lazy(() => import('./components/views/CartProducts/CartProducts'));
const Profile  = lazy(() => import('./components/views/Profile/Profile'));
const Login = lazy(() => import('./components/common/Login/Login'));
const Admin = lazy(() => import('./components/Admin/Dashboard/Dashboard'));
const Form = lazy(() => import('./components/Admin/Form/Form'));

function App() {

  const location = useLocation();

  //acá defino en qué rutas no se verá el menú de categorías, son de prueba estas
  const hideMenu = location.pathname.includes('/form') || location.pathname.includes('/admin') || location.pathname.includes('/cart') || location.pathname.includes('/checkout');
  const hidenavYmenu = location.pathname.includes('/admin') || location.pathname.includes('/form');

  return (
    <div className="App">
      <Suspense fallback={<h1>Cargando ...</h1>}>
        {!hidenavYmenu && <Navuno />}
        {!hideMenu && <Menu />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:id' element={<Detail />} />
          <Route path='/cart' element={<CartProducts />}/>
          <Route path='/checkout' element={<Cart />}/>
          <Route path='/payment' />
          <Route path="/arrepentimiento" element={<Arrepentimiento />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/form' element={<Form />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {!hidenavYmenu && <Footer />}

      </Suspense>

    </div>
  );
}

export default App;


