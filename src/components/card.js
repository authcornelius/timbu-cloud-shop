import React from 'react';
import '../style/card.css'
import Star from '../assets/Star.png'

const Card = ({ title, text, imageUrl, price, color }) => {
  return (
    <div className='card'>
      <div className=' col-6 d-flex justify-content-center'>
        {imageUrl && <img className='card-img p-2' variant="top" src={imageUrl} alt='' />}
      </div>

      <div className='card-body col-6 border'>
        <div className='card-title'>
          <div className='title d-flex justify-content-between px-2 col-12 col-lg-9 rounded'>
            <h1 className=' fs-3'>{title}</h1>

            <div className=' d-flex justify-content-center my-auto'>
              <img src={Star} alt='' className='' />
            </div>
          </div>
        </div>

        <div className='card-text'>
          <p className=' fs-6 col-12 col-md-10'>
            {text}
          </p>
        </div>


        <div className=' border mt-5 priceSection align-items-end'>
          <div className='d-flex justify-content-between'>
            <div className='card-text price'>
              <h3>Price</h3>
              <h6>${price}</h6>
            </div>

            <div className='color'>
              <h3 className='text-center mb-1'>Color</h3>
              <ul className='list-group d-flex flex-row'>
                <li className='list-group-item p-2 mx-1'></li>
                <li className='list-group-item p-2 mx-1'></li>
                <li className='list-group-item p-2 mx-1'></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
