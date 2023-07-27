import React from 'react';
import '../CSS FILES/ProductCard.css';
import modelimg from '../IMAGES/card_model.png';

export default function ProductCard(props) {
  return (
    <>
      <div className='product-card'>
        <div className='product-image'>
          <img src={modelimg} alt='model' />
        </div>

        <div className='product-details'>
          <div className='product-name'>
            <p>{props.name}</p> {/* Use props.name instead of props.Name */}
          </div>

          <div className='product-price'>
            <p>Rs. {props.price}</p> {/* Use props.price instead of props.Price */}
          </div>
        </div>
      </div>
    </>
  );
}
