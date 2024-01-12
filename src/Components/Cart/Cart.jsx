import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <p>No hay elementos en el carrito</p>
        <Link to="/" className="d-block text-center mt-3">
          Hacer compras
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5 mx-auto">
      <h2 className="text-center mb-4">Carrito de Compras</h2>
      <div className="row justify-content-center">
        {cart.map((products) => (
          <ItemCart key={products.id} products={products} />
        ))}
      </div>
      <div className="text-center mt-4">
      <p>Total: USD {totalPrice()}</p>
        <Link to="/CheckOut">
          {' '}
          <button className="btn btn-primary">Finalizar Compra</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;