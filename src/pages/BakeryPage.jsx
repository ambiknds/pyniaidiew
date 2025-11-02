import React from 'react';
import { ShopTemplate } from '../components/shops';

function BakeryPage() {
  const heroData = {
    title: 'Artisan Bakery',
    subtitle: 'Freshly Baked Daily - From Our Oven to Your Table',
    backgroundImage: null, // Add your image URL here
    ctaText: 'Order Now',
    ctaLink: '#contact'
  };

  const carouselData = {
    images: [
      {
        url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800',
        alt: 'Fresh bread',
        caption: 'Freshly baked artisan bread every morning'
      },
      {
        url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800',
        alt: 'Delicious cakes',
        caption: 'Custom cakes for every celebration'
      },
      {
        url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800',
        alt: 'Pastries display',
        caption: 'Wide variety of pastries and desserts'
      }
    ],
    autoPlay: true,
    interval: 4000
  };

  const aboutData = {
    title: 'About Our Bakery',
    description: 'Welcome to our artisan bakery where tradition meets innovation. We use only the finest ingredients to create delicious breads, pastries, and cakes. Each item is handcrafted with love and baked fresh daily to ensure the highest quality for our customers.',
    features: [
      'Fresh baking every day starting at 5 AM',
      'All-natural ingredients, no preservatives',
      'Custom cakes for weddings and special occasions',
      'Wide variety of breads, pastries, and desserts',
      'Special diet options (sugar-free, gluten-free)',
      'Online ordering and home delivery available'
    ],
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800',
    imagePosition: 'left'
  };

  const contactData = {
    title: 'Visit Our Bakery',
    phone: '+91 9876543210',
    email: 'orders@artisanbakery.com',
    address: 'Police Bazar, Shillong - 793001',
    hours: [
      'Monday - Saturday: 6:00 AM - 9:00 PM',
      'Sunday: 7:00 AM - 8:00 PM'
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

export default BakeryPage;
