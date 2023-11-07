import './App.css';
import Carousel from './Carousel';
import Navbar from './Navbar';
import Card from './Card';
import data from './data';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './Cart';
import { useState } from 'react';
import Home from './Home';


function App() {

  // const [cartdata , setCartdata]=useState([])
  let userCartItems = [];

  const handleCartData = (product) =>{
    console.log(product);

    userCartItems.push(product);

    // setCartdata((cartdata)=> [...cartdata,{data:product,quantity:1}])
  }
  return (
    <div className="App">
    <BrowserRouter>
      < Navbar />

      <Routes>
        {/* <Route exact path="/" element={<Home/>}/> */}
        <Route exact path="/" element={<Card data={data} handleCartData={handleCartData}/>}/>
        <Route exact path="/cart" element={<Cart cartProducts={userCartItems}/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;