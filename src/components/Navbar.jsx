import React from "react";
import { Link } from "react-router-dom";
import { BiBell } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { BsShop } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import pp from "../assets/pp.jpg";
import {AiOutlineSearch} from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-7 px-12 border-2 items-center border-black-500">
      <div className="w-64 nav-brand flex items-center justify-between ">
        <Link to="/">Market</Link>
        <div className="brand flex items-center border-2 rounded-full border-black-500 ml-5 px-3 p-1">
          <div className="icon"><AiOutlineSearch/></div>
          <input
            type="search"
            className="w-48 search ml-2"
            placeholder="Cari"
          />
        </div>
      </div>
      <ul className="flex justify-evenly">
        <li className="mx-4">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-4">
          <Link to="/">Product</Link>
        </li>
        <li className="mx-4">
          <Link to="/">Promo</Link>
        </li>
        <li className="mx-4">
          <Link to="/">Contact Us</Link>
        </li>
      </ul>
      <div className="profile-icon flex justify-between items-center">
        <div className="icon-list flex items-center m-1 p-2 border-r-2 border-black">
          <Link to="/" className="icon mx-3">
            <BiBell />
          </Link>
          <Link to="/" className="icon mx-3">
            <TiMessages />
          </Link>
          <Link to="/" className="icon mx-3">
            <BsShop />
          </Link>
          <Link to="/" className="icon mx-3">
            <AiOutlineShoppingCart />
          </Link>
        </div>
        <button class="rounded-lg ml-4 p-3 px-8 bg-sky-400 text-white font-bold">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
