import React from 'react'
import './App.css'
import { Routes, Route, BrowserRouter, } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';



function App() {
  return (
    <div className="App">
<BrowserRouter>
  <Routes>
      <Route path="/" exact element={<Home/>}  ></Route>
      <Route path="/shop" exact element={<Shop/>}  ></Route>
      <Route path="/login" element={<Login/>}  ></Route>
      <Route path="sign up" element={<SignUp/>}  ></Route>
      <Route path="/cart" element={<Cart/>}  ></Route>
  </Routes> 
</BrowserRouter>
 </div>    
  
  );
}

export default App;
