import React from 'react'
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Nav from './Routing/Nav'
import Cart from './Routing/Cart'
import Product from './Routing/Product'
import Home from './Routing/Home'
function App() {
  return (
   <>
    <div className="App">
     <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
     </div>
   </>
  );
}

export default App;