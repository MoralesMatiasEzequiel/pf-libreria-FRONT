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

function App() {

  const location = useLocation();

  //acá defino en qué rutas no se verá el menú de categorías, son de prueba estas
  const hideMenu = location.pathname.includes('/cart') || location.pathname.includes('/payment');

  return (
    <div className="App">
      <Suspense fallback={<h1>Cargando ...</h1>}>
        <Navuno />
        {!hideMenu && <Menu />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:id' element={<Detail />} />
          <Route path='/cart' element={<Cart />}/>
          <Route path='/payment' />
          <Route path="/arrepentimiento" element={<Arrepentimiento />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;


