import { useState } from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Error from './Components/Error';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/Context/CartContext';
import {CheckOut} from './Components/CheckOut/CheckOut';


function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <NavBar />

    <Routes>

      <Route path='/' element={ <ItemListContainer /> } />
      <Route path='/category/:id' element={ <ItemListContainer /> } />
      <Route path='/item/:id' element={ <ItemDetailContainer /> } />
      <Route path={"/cart"} element={<Cart/>} />
      <Route path={"/CheckOut"} element={<CheckOut/>} />
      <Route path='*' element={ <Error /> } />

    </Routes>

    </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
