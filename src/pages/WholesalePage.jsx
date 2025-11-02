import React from 'react';
import { ShopTemplate } from '../components/shops';

function WholesalePage() {
  const heroData = {
    title: 'Wholesale Mart',
    subtitle: 'Bulk Supplies at Best Prices - For Retailers & Businesses',
    backgroundImage: null,
    ctaText: 'Get Quote',
    ctaLink: '#contact'
  };

  const carouselData = {
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
        alt: 'Warehouse',
        caption: 'Spacious warehouse with organized inventory'
      },
      {
        url: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800',
        alt: 'Product variety',
        caption: 'Wide range of products in bulk quantities'
      },
      {
        url: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?w=800',
        alt: 'Delivery service',
        caption: 'Fast and reliable delivery service'
      }
    ],
    autoPlay: true,
    interval: 4000
  };

  const aboutData = {
    title: 'About Our Wholesale Business',
    description: 'We are your trusted partner for wholesale supplies, serving retailers and businesses across the region. With competitive pricing, quality products, and reliable service, we help your business grow. From groceries to household items, we stock everything you need.',
    features: [
      'Competitive wholesale prices',
      'Minimum order quantity flexibility',
      'Wide range of FMCG products',
      'Credit facilities for regular customers',
      'Free delivery for bulk orders',
      'Quality assurance on all products'
    ],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    imagePosition: 'right'
  };

  const contactData = {
    title: 'Partner With Us',
    phone: '+91 8876543210',
    email: 'business@wholesalemart.com',
    address: 'Industrial Area, Shillong - 793002',
    hours: [
      'Monday - Saturday: 8:00 AM - 7:00 PM',
      'Sunday: Closed'
    ],
    mapLatitude: 25.5788,
    mapLongitude: 91.8933
  };

  return <ShopTemplate 
    heroData={heroData}
    carouselData={carouselData}
    aboutData={aboutData}
    contactData={contactData}
  />;
}

export default WholesalePage;
