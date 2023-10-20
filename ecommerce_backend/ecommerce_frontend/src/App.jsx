import React from 'react'
import './styles/App.css'
import { Routes, Route, BrowserRouter, } from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Login'
import SignUp from './SignUp'
import Shop from './Shop'
import Checkout from './Checkout'

function App() {
  return (
    <div className="App">
<BrowserRouter>
  <Routes>
     {/* linking the files */}
      <Route path="/" exact element={<Home/>}  ></Route>
      <Route path="/login" element={<Login/>}  ></Route>
      <Route path="/signUp" element={<SignUp/>}  ></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/checkout' element={<Checkout/>}></Route>
  </Routes> 
</BrowserRouter>
 </div>    
  
  );
}

export default App;