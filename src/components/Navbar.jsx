import React from 'react'
import { Link } from 'react-router-dom'
import {BiBell} from 'react-icons/bi'
import {TiMessages} from 'react-icons/ti'
import {BsShop} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
const Navbar = () => {
  return (
    <nav className='flex justify-between p-7 border-2 border-black-500'>
        <div className='nav-brand flex justify-between w-64'>
            <Link to="/">Market</Link>
            <input type="search" className='w-48' placeholder='Cari'/>
        </div>
        <ul className='flex justify-evenly'>
          <li className='mx-4'>
            <Link to="/">Home</Link>
          </li>
          <li className='mx-4'>
            <Link to="/">Product</Link>
          </li>
          <li className='mx-4'>
            <Link to="/">Promo</Link>
          </li>
          <li className='mx-4'>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
        <div className='profile-icon flex justify-between w-20 items-center'>
          <div className="icon-list flex items-center">
            <div className="icon"><BiBell /></div>
            <div className="icon"><TiMessages/></div>
            <div className="icon"><BsShop/></div>
            <div className="icon"><AiOutlineShoppingCart/></div>
          </div>
          <img src="#" alt="pp" />
        </div>
    </nav>
  )
}

export default Navbar;