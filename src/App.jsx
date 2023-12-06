import { useState } from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Error from './Components/Error';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CardWidget from './Components/CardWidget/CardWidget';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />

    <Routes>

      <Route path='/' element={ <ItemListContainer /> } />
      <Route path='/category/:id' element={ <ItemListContainer /> } />
      <Route path='/item/:id' element={ <ItemDetailContainer /> } />
      <Route path='/cart' element={ <CardWidget /> } />
      <Route path='*' element={ <Error /> } />

    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
