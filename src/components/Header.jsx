import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import SearchBar from './SearchBar';
import NavItem from './ui/NavItem';
import MobileMenu from './MobileMenu';
import { shopCategories } from '../config/shopCategories';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-3xl mr-4">
          <SiHomeassistantcommunitystore />
        </Link>
        
        <div className="flex-grow flex justify-center">
          <SearchBar />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 items-center ml-4">
          <NavItem to="/">Home</NavItem>
          <NavItem dropdownItems={shopCategories}>Shops</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        {/* Mobile menu button */}
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

      {/* Mobile menu */}
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Header;
