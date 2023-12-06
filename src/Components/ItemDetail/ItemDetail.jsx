import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div className='row'>
      <div className='col-md-4 iifset-md-4'>
      <img src={item.imagen} alt={item.nombre} className='img-fluid' />
      <h3>{item.nombre}</h3>
      <p>{item.descripcion}</p>
      <p>USD {item.precio}</p>
      </div>
    </div>
  )
}

export default ItemDetail