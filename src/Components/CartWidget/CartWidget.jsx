import React from 'react';
import { BsCart2 } from "react-icons/bs";
import {useCartContext} from '../Context/CartContext';



const CartWidget = () => {
  const {totalProducts, cart} = useCartContext();
  return (
    <div className="container">
       <button>
        <div className='mt-2'> <BsCart2 /> </div>
      </button>
      <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger mt-2">{totalProducts() ||cart}</span>
    </div>
  )
}

export default CartWidget