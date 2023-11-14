import { useState } from 'react'
import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Soy el main de los productos" />
    </>
  )
}

export default App
