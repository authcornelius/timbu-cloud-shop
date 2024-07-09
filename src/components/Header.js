import React from 'react';
import '../style/header.css';
import Home from '../assets/home.png'
import Saved from '../assets/Star.png'
import Profile from '../assets/e-commerce.png'
import Cart from '../assets/cart.png'

const Header = () => {
  return (
    <div>
      <header className=''>
        <div className='container py-2'>
          <div className='row'>
            <div className='col-2 d-block d-md-none'>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>
            </div>

            <div className='col-8 col-md-12 col-lg-12 text-center'>
              <h1>Iyke's Clothings</h1>
            </div>

            <div className='col-2 d-block d-md-none'>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
              </svg>
            </div>
          </div>
        </div>
      </header>

      <div className="px-1 px-lg-5">
        <div className="row">
          <div className="col-md-6">
            <ul className="list-unstyled text-center d-flex">
              <li>
                <div className='mx-2'>
                  <img src={Home} alt='Home' />
                  <h3 className="mt-2 mb-0">Home</h3>
                </div>
              </li>
              <li>
                <div className='mx-2'>
                  <img src={Saved} alt='Saved' />
                  <h3 className="mt-2 mb-0">Saved</h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <ul className="list-unstyled text-center d-flex">
              <li>
                <div className='mx-2'>
                  <img src={Profile} alt='Profile' />
                  <h3 className="mt-2 mb-0">Profile</h3>
                </div>
              </li>
              <li>
                <div className='mx-2'>
                  <img src={Cart} alt='Cart' />
                  <h3 className="mt-2 mb-0">Cart</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
