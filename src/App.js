import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Home from './components/views/Home/Home'
import About from './components/views/About/About'
import Shop from './components/views/Shop/Shop'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product/:id' />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
