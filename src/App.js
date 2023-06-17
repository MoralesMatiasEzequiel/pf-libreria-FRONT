import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/common/Nav/Nav';
import Menu from './components/common/Menu/Menu';
import Footer from './components/common/Footer/Footer';
import Home from './components/views/Home/Home';
import About from './components/views/About/About';
import Shop from './components/views/Shop/Shop';
import Detail from './components/views/Shop/Detail/Detail'

function App() {

  const location = useLocation();

  //acá defino en qué rutas no se verá el menú de categorías, son de prueba estas
  const hideMenu = location.pathname.includes('/cart') || location.pathname.includes('/payment');

  return (
    <div className="App">
      <Nav />
      {!hideMenu && <Menu />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:id' element={<Detail />} />
        <Route path='/cart' />
        <Route path='/payment' />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
