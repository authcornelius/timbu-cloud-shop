import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../style/footer.css';
import Home from '../assets/home.png';
import Saved from '../assets/Star.png';
import Profile from '../assets/e-commerce.png';
import Cart from '../assets/cart.png';

function Footer() {
  return (
    <footer className='d-block d-lg-none'>
      <ul className='nav d-flex justify-content-between py-2 px-2'>
        <li className='nav-item'>
          <Link to='/home'>
            <img src={Home} alt='Home' className='d-block mx-auto' />
            <span>Home</span>
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='/saved'>
            <img src={Saved} alt='Saved' className='d-block mx-auto' />
            <span>Saved</span>
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='/cart'>
            <img src={Cart} alt='Cart' className='d-block mx-auto' />
            <span>Cart</span>
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='/profile'>
            <img src={Profile} alt='Profile' className='d-block mx-auto' />
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
