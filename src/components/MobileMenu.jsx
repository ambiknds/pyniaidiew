import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from './ui/NavItem';
import { shopCategories } from '../config/shopCategories';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-gray-800 p-4 rounded-lg mt-2">
      <NavItem to="/" isMobile onClick={toggleMenu}>
        Home
      </NavItem>
      
      <div className="py-2">
        <NavItem 
          dropdownItems={shopCategories}
          isMobile
          onClick={toggleMenu}
        >
          Shops
        </NavItem>
      </div>
      
      <NavItem to="/about" isMobile onClick={toggleMenu}>
        About
      </NavItem>
      <NavItem to="/contact" isMobile onClick={toggleMenu}>
        Contact
      </NavItem>
    </div>
  );
};

export default MobileMenu;
