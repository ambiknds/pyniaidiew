import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const NavItem = ({ to, children, dropdownItems, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasDropdown = dropdownItems && dropdownItems.length > 0;

  const toggleDropdown = (e) => {
    if (hasDropdown) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  const baseClasses = isMobile 
    ? 'block w-full text-left px-4 py-2 hover:bg-gray-700 rounded'
    : 'hover:text-gray-300 px-2 py-1';

  const dropdownClasses = isMobile
    ? 'pl-4 mt-1 space-y-1'
    : 'absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50';

  return (
    <div className={hasDropdown ? 'relative group' : ''}>
      {hasDropdown ? (
        <>
          <button
            onClick={toggleDropdown}
            className={`${baseClasses} flex items-center`}
          >
            {children}
            {isOpen ? (
              <FaChevronUp className="ml-1" size={14} />
            ) : (
              <FaChevronDown className="ml-1" size={14} />
            )}
          </button>
          {isOpen && (
            <div 
              className={dropdownClasses}
              onMouseLeave={() => !isMobile && setIsOpen(false)}
            >
              {dropdownItems.map((item) => (
                <Link
                  key={item.id}
                  to={`/${item.id}`}
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link to={to} className={baseClasses}>
          {children}
        </Link>
      )}
    </div>
  );
};

export default NavItem;
