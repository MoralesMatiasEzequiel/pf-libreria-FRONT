import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navuno from './components/common/Nav/Nav';
import Menu from './components/common/Menu/Menu';
import Footer from './components/common/Footer/Footer';
import Home from './components/views/Home/Home';
import About from './components/views/About/About';
import Shop from './components/views/Shop/Shop';
import Cart from './components/views/Cart/Cart';
import Detail from './components/views/Shop/Detail/Detail';
import Arrepentimiento from './components/views/Arrepentimiento/Arrepentimiento';
import Terminos from './components/views/Terminos/Terminos';
import CartProducts from './components/views/CartProducts/CartProducts';
import Profile from './components/views/Profile/Profile';
import Login from './components/common/Login/Login';
import Admin from './components/Admin/Dashboard/Dashboard';
import Form from './components/Admin/Form/Form';
import FormCreateReview from './components/common/FormCreateReview/FormCreateReview'
import Favorites from './components/views/Favorites/Favorites';
import Success from './components/views/Mercadopago/Success';

function App() {

  const location = useLocation();

  //acá defino en qué rutas no se verá el menú de categorías, son de prueba estas
  const hideMenu = location.pathname.includes('/form') || location.pathname.includes('/admin') || location.pathname.includes('/cart') || location.pathname.includes('/checkout');
  const hidenavYmenu = location.pathname.includes('/admin') || location.pathname.includes('/form');

  return (
    <div className="App">
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
          <Route path='/success' element={<Success />}/>
					<Route path='/favorites' element={<Favorites/>}/>
          <Route path="/arrepentimiento" element={<Arrepentimiento />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/form' element={<Form />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path='/createShopReview' element={<FormCreateReview />} />
        </Routes>
        {!hidenavYmenu && <Footer />}

    </div>
  );
}

export default App;


