import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Home } from './pages/home/home';
import { Cart } from './pages/cart/cart';
import { Shop } from './pages/shop/shop';
import { About } from './pages/about/about';
import { ShopContextProvider } from './context/shop-context';


function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />  
            <Route path="/shop" element={<Shop/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  
  );
}

export default App;
