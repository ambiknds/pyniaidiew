import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { searchProducts, searchShops } from '../services/api';

function useQuery() {
  const { search } = useLocation();
  return new URLSearchParams(search);
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  );
}

export default function SearchResults() {
  const qs = useQuery();
  const q = qs.get('q') || qs.get('search') || '';

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [shops, setShops] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const run = async () => {
      if (!q || q.trim().length < 1) return;
      try {
        setLoading(true);
        setError(null);
        const [p, s] = await Promise.all([
          searchProducts(q),
          searchShops(q),
        ]);
        setProducts(Array.isArray(p) ? p : []);
        setShops(Array.isArray(s) ? s : []);
      } catch (e) {
        console.error(e);
        setError('Failed to search.');
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [q]);

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>
      {q && (
        <p className="text-gray-600 mb-8">Showing results for: <span className="font-semibold">{q}</span></p>
      )}

      {loading && <div>Loading...</div>}
      {error && <div className="text-red-600">{error}</div>}

      {!loading && !error && (
        <>
          <Section title={`Products (${products.length})`}>
            {products.length === 0 ? (
              <p className="text-gray-500">No products found.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(p => (
                  <Link key={p.id}
                        to={`/product/${p.id}`}
                        className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="font-semibold truncate">{p.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </Section>

          <Section title={`Shops (${shops.length})`}>
            {shops.length === 0 ? (
              <p className="text-gray-500">No shops found.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {shops.map(s => {
                  const id = s.id || s._id;
                  const title = s.title || s.name || s.shopName;
                  const image = s.image || s.coverImage || (Array.isArray(s.images) ? s.images[0] : undefined);
                  const category = s.category || s.type || s.shopType || 'shop';
                  const path = `/${category}/${id}`;
                  return (
                    <Link key={`${category}-${id}`}
                          to={path}
                          className="bg-white rounded-lg shadow-md overflow-hidden">
                      {image && (<img src={image} alt={title} className="w-full h-48 object-cover" />)}
                      <div className="p-4">
                        <h3 className="font-semibold truncate">{title}</h3>
                        {s.category && <p className="text-xs text-gray-500 mt-1 uppercase">{s.category}</p>}
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </Section>
        </>
      )}
    </div>
  );
}
