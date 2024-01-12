import React from 'react';
import { useCartContext } from '../Context/CartContext';

const ItemCart = ({ products }) => {

    const { removeProduct, addProduct, decreaseProduct, isInCart } = useCartContext();
  
    const addQuantity = () => {
      if (products.quantity < products.stock) {
        addProduct(products, 1);
      }
    };
  
    const decreaseQuantity = () => {
      if (products.quantity > 1) {
        decreaseProduct(products.id);
      }
    };

  return (
    <div className="itemCart mb-3 p-3 border d-flex align-items-center">
      <div className="itemCart-image-container mr-3">
        <img src={products.img} alt={products.title} className="itemCart-image img-fluid object-fit-cover" />
      </div>
      <div className='col'>
        <h5 className='card-title'>{products.title}</h5>
        <p>Cantidad: {products.quantity}</p>
        <p>Precio unitario: USD {products.price}</p>
        <p>Subtotal: USD {Number((products.quantity * products.price).toFixed(2))}</p>
        <div className="d-flex justify-content-center align-items-center">
          <button onClick={() => addQuantity()} className="btn btn-sm btn-success mr-1">
            +
          </button>
          <button onClick={() => decreaseQuantity()} className="btn btn-sm btn-warning mx-1">
            -
          </button>
          <button onClick={() => removeProduct(products.id)} className="btn btn-sm btn-danger ml-1">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;