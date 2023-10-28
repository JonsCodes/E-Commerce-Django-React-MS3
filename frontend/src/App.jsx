import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import Login from '../src/components/User-Login/Login';
import SignUp from '../src/components/User-Registration/Registration';
import { Shop } from '../src/pages/shop/shop';
import { Cart }  from '../src/pages/cart/cart';
import Gloves from '../src/molecules/Gloves';
import Handwraps from '../src/molecules/Handwraps';
import Shoes from '../src/molecules/Shoes';
import '../src/Styles/index.css';
import About from '../src/pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop/gloves" element={<Gloves />} />
          <Route path="/shop/handwraps" element={<Handwraps />} />
          <Route path="/shop/shoes" element={<Shoes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
