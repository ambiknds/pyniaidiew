import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { searchProducts, searchShops } from '../services/api';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length > 2) {
        setIsLoading(true);
        try {
          const [p, s] = await Promise.all([
            searchProducts(query),
            searchShops(query),
          ]);
          const productItems = (p || []).slice(0, 5).map(item => ({
            type: 'product',
            id: item.id,
            title: item.title,
          }));
          const shopItems = (s || []).slice(0, 5).map(item => ({
            type: 'shop',
            id: item.id || item._id,
            title: item.title || item.name || item.shopName,
            category: item.category || item.type || item.shopType,
          }));
          setSuggestions([...productItems, ...shopItems].slice(0, 8));
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
        setIsLoading(false);
      } else {
        setSuggestions([]);
      }
    };

    const debounce = setTimeout(() => {
      fetchSuggestions();
    }, 300);

    return () => clearTimeout(debounce);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (item) => {
    if (item.type === 'product' && item.id) {
      navigate(`/product/${item.id}`);
    } else if (item.type === 'shop' && item.id && item.category) {
      navigate(`/${item.category}/${item.id}`);
    } else {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
    setShowSuggestions(false);
    setQuery('');
  };

  return (
    <div className="relative w-full max-w-xl" ref={searchRef}>
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search products and shops..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          className="w-full bg-gray-100 text-gray-700 rounded-full py-2 px-4 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button type="submit" className="absolute right-3 top-2">
          <FaSearch className="text-gray-400" />
        </button>
      </form>
      {showSuggestions && query.length > 2 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
          {isLoading ? (
            <div className="p-2 text-gray-700">Loading...</div>
          ) : suggestions.length > 0 ? (
            <ul>
              {suggestions.map((sugg, idx) => (
                <li
                  key={`${sugg.type}-${sugg.id}-${idx}`}
                  onClick={() => handleSuggestionClick(sugg)}
                  className="px-4 text-gray-700 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {sugg.title}
                  <span className="ml-2 text-xs uppercase text-gray-400">{sugg.type}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
