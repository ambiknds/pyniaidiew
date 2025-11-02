import React from 'react';
import { ShopTemplate } from '../components/shops';

function DepartmentalStorePage() {
  const heroData = {
    title: 'Mega Departmental Store',
    subtitle: 'One-Stop Shopping Destination - Quality Products, Great Prices',
    backgroundImage: null,
    ctaText: 'Start Shopping',
    ctaLink: '#contact'
  };

  const carouselData = {
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555529902-5261145633bf?w=800',
        alt: 'Store entrance',
        caption: 'Welcome to your one-stop shopping destination'
      },
      {
        url: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800',
        alt: 'Product sections',
        caption: 'Multiple departments under one roof'
      },
      {
        url: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800',
        alt: 'Shopping experience',
        caption: 'Comfortable and modern shopping experience'
      }
    ],
    autoPlay: true,
    interval: 4000
  };

  const aboutData = {
    title: 'About Our Departmental Store',
    description: 'Experience convenient shopping at our mega departmental store. We offer a vast selection of products across multiple categories - groceries, electronics, clothing, home appliances, cosmetics, and much more. With competitive prices and quality products, we are your complete family shopping destination.',
    features: [
      'Wide variety of products across all categories',
      'Branded and local products available',
      'Fresh groceries and daily essentials',
      'Electronics and home appliances',
      'Fashion and accessories section',
      'Ample parking and shopping carts'
    ],
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800',
    imagePosition: 'left'
  };

  const contactData = {
    title: 'Visit Our Store',
    phone: '+91 8123456789',
    email: 'info@megastore.com',
    address: 'Barik, Shillong - 793005',
    hours: [
      'Monday - Sunday: 9:00 AM - 10:00 PM'
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

export default DepartmentalStorePage;
