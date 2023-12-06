import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (

    <Link to={`/item/${item.id}`} className='text-decoration-none'>
        <div className='container'>
            <div className='card border border-0'>
                <img src={item.imagen} alt={item.nombre} className='card-img-top' />
                <div className='card-body text-center'>
                    <p children='card-text'>{item.nombre}</p>
                </div>
            </div>
        </div>
    </Link>
    
  )
}

export default Item