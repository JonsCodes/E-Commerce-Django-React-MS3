import React from 'react'
import './App.css'
import { Routes, Route, BrowserRouter, } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import Shop from './Shop'


function App() {
  return (
    <div className="App">
<BrowserRouter>
  <Routes>
     {/* linking the files */}
      <Route path="/" exact element={<Home/>}  ></Route>
      <Route path="/login" element={<Login/>}  ></Route>
      <Route path="/signUp" element={<SignUp/>}  ></Route>
      <Route path='/shop' exact element={<Shop/>}></Route>
  </Routes> 
</BrowserRouter>
 </div>    
  
  );
}

export default App;