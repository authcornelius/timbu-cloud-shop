import React from 'react'
import '../style/footer.css'
import Home from '../assets/home.png'
import Saved from '../assets/Star.png'
import Profile from '../assets/e-commerce.png'
import Cart from '../assets/cart.png'

function Footer() {
  return (
    <footer className='d-block d-lg-none'>
        <ul className='nav d-flex justify-content-between py-2 px-2'>
            <li className=' nav-item'>
                <img src={Home} alt='' className='d-block mx-auto' />
                <span className=''>Home</span>
            </li>

            <li className=' nav-item'>
                <img src={Saved} alt='' className='d-block mx-auto'/>
                <span className=''>Saved</span>
            </li>

            <li className=' nav-item'>
                <img src={Cart} alt='' className='d-block mx-auto'/>
                <span className=''>Cart</span>
            </li>

            <li className=' nav-item'>
                <img src={Profile} alt='' className='d-block mx-auto'/>
                <span className=''>Profile</span>
            </li>

        </ul>
    </footer>
  )
}

export default Footer