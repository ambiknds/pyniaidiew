import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import SearchBar from './SearchBar';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }


  return (
    <header className="bg-gray-900 text-white flex items-center justify-between">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-3xl mr-4">
          <SiHomeassistantcommunitystore />
          {/* <img src={logo}/> */}
        </Link>
        <div className="flex-grow flex justify-center">
          <SearchBar />
        </div>
        
      </div>
       <nav className="sm:mx-4 lg:mx-8">
        <div className="flex justify-end items-center mx-2">
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
          <button
            className="md:hidden focus:outline-none m-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <Link to="/" className="block py-2 hover:text-gray-300" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="block py-2 hover:text-gray-300" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="block py-2 hover:text-gray-300" onClick={toggleMenu}>Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
