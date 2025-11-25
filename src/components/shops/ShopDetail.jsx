import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockApi } from '../../data/sampleData';
import ShopTemplate from './ShopTemplate';

function normalizeShopToTemplate(shop) {
  if (!shop) return {};

  const title = shop.title || shop.name || shop.shopName || 'Shop';
  const subtitle = shop.tagline || shop.subtitle || shop.category || '';

  const images = shop.images || shop.gallery || [];
  const primaryImage = shop.coverImage || shop.image || images?.[0];

  const addressParts = [shop.address?.line1, shop.address?.line2, shop.address?.city, shop.address?.pincode]
    .filter(Boolean)
    .join(', ');

  const hours = shop.hours || shop.timings || shop.businessHours || [];

  const heroData = {
    title,
    subtitle,
    backgroundImage: primaryImage || null,
    ctaText: shop.ctaText || 'Contact Us',
    ctaLink: '#contact',
  };

  const carouselData = {
    images: (images || []).map((url, idx) => ({ url, alt: `${title} ${idx + 1}`, caption: null })),
    autoPlay: true,
    interval: 4000,
  };

  const aboutData = {
    title: `About ${title}`,
    description: shop.description || shop.about || '',
    features: shop.features || shop.highlights || shop.services || [],
    image: primaryImage || null,
    imagePosition: 'right',
  };

  const contactData = {
    title: 'Get in Touch',
    phone: shop.phone || shop.contactNumber || shop.mobile || null,
    email: shop.email || null,
    address: shop.address?.formatted || addressParts || shop.address || null,
    hours: Array.isArray(hours) ? hours : [],
    mapEmbedUrl: shop.mapEmbedUrl || null,
    mapLatitude: shop.location?.lat || shop.latitude || null,
    mapLongitude: shop.location?.lng || shop.longitude || null,
  };

  return { heroData, carouselData, aboutData, contactData };
}

function ShopDetail({ category }) {
  const { id } = useParams();
  const [shop, setShop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await mockApi.getShopById(category, id);
        setShop(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching shop detail:', err);
        setError('Failed to load details.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [category, id]);

  const templateData = useMemo(() => normalizeShopToTemplate(shop), [shop]);

  if (loading) return <div className="container mx-auto px-6 py-8">Loading...</div>;
  if (error) return <div className="container mx-auto px-6 py-8 text-red-600">{error}</div>;
  if (!shop) return <div className="container mx-auto px-6 py-8">Not found</div>;

  return (
    <ShopTemplate
      heroData={templateData.heroData}
      carouselData={templateData.carouselData}
      aboutData={templateData.aboutData}
      contactData={templateData.contactData}
    />
  );
}

export default ShopDetail;
