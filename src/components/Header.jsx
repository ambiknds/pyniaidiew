import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import SearchBar from './SearchBar';
import logo from '../assets/logo.svg'

function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-3xl mr-4">
          <SiHomeassistantcommunitystore />
          {/* <img src={logo}/> */}
        </Link>
        <div className="flex-grow flex justify-center">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
