import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchShopsByCategory } from '../../services/api';

function ShopListing({ category, title }) {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchShopsByCategory(category);
        setItems(Array.isArray(data) ? data : []);
        setError(null);
      } catch (err) {
        console.error('Error fetching shops:', err);
        setError('Failed to load shops.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [category]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search');

    if (searchQuery) {
      const filtered = items.filter((item) =>
        (item.title || item.name || '').toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);
    }
  }, [location.search, items]);

  if (loading) {
    return <div className="container mx-auto px-6 py-8">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto px-6 py-8 text-red-600">{error}</div>;
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">{title || 'Listings'}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <Link
            key={item.id || item._id}
            to={`/${category}/${item.id || item._id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={item.image || item.coverImage || item.images?.[0]}
              alt={item.title || item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2 truncate">
                {item.title || item.name}
              </h2>
              {item.shortDescription && (
                <p className="text-gray-600 text-sm line-clamp-2">{item.shortDescription}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
      {filteredItems.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No results found.</p>
      )}
    </div>
  );
}

export default ShopListing;
