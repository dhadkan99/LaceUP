import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineLanguage } from "react-icons/md";

function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-transparent shadow-sm">
      <nav className="container flex justify-center items-center px-6 py-4 mx-auto">
        <div className="absolute left-6">
          <Link to="/">
            <h1 className="text-4xl font-extrabold">Lace UP</h1>
          </Link>
        </div>
        <ul className="flex justify-center space-x-8 font-medium text-center text-white">
          <li>
            <Link to="/" className="hover:text-gray-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/brand" className="hover:text-gray-600">
              Brand
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-gray-600">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/men" className="hover:text-gray-600">
              Men
            </Link>
          </li>
          <li>
            <Link to="/women" className="hover:text-gray-600">
              Women
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-600">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex absolute right-6 items-center space-x-4 text-xl text-black">
          <button title="Language" className="hover:text-gray-600">
            <MdOutlineLanguage />
          </button>
          <button title="Profile" className="hover:text-gray-600">
            👤
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
