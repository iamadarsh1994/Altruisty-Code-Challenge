import { Link } from "react-router-dom";
import carticon from '../assets/cart.png';
import wishicon from '../assets/heart2.png';
import Accicon from '../assets/user.png';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md flex justify-between items-center py-4">
      <a href="#" className="text-lg font-bold">
        Exclusive
      </a>

      <div className="block md:hidden">
        <button
          className="focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <ul className={`flex-col md:flex md:flex-row md:justify-end ${isOpen ? 'flex' : 'hidden'} absolute md:relative bg-white w-full md:w-auto z-10`}>
        <li className="mr-6">
          <Link to="/homepage" className="text-gray-600 hover:text-gray-900">Home</Link>
        </li>
        <li className="mr-6">
          <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
        </li>
        <li className="mr-6">
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
        </li>
        <li className="mr-6">
          <Link to="/signup" className="text-gray-600 hover:text-gray-900">Sign Up</Link>
        </li>
        <li className="mr-6">
          <Link to="/search" className="text-gray-600 hover:text-gray-900">Search</Link>
        </li>
        <li className="mr-6">
          <Link to="/wishlist" className="text-gray-600 hover:text-gray-900">
            <img src={wishicon} alt="Wishlist" className="w-6 h-6" />
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/cart" className="text-gray-600 hover:text-gray-900">
            <img src={carticon} alt="Cart" className="w-6 h-6" />
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/account" className="text-gray-600 hover:text-gray-900">
            <img src={Accicon} alt="Account" className="w-6 h-6" />
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/checkout" className="text-gray-600 hover:text-gray-900">Checkout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
