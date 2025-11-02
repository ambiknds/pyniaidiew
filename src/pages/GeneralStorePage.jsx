import React from 'react';
import { ShopTemplate } from '../components/shops';

function GeneralStorePage() {
  const heroData = {
    title: 'Community General Store',
    subtitle: 'Your Neighborhood Store - Everything You Need Under One Roof',
    backgroundImage: null,
    ctaText: 'Shop Now',
    ctaLink: '#contact'
  };

  const carouselData = {
    images: [
      {
        url: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800',
        alt: 'Store interior',
        caption: 'Well-stocked shelves with daily essentials'
      },
      {
        url: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=800',
        alt: 'Fresh products',
        caption: 'Fresh vegetables and groceries'
      },
      {
        url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800',
        alt: 'Friendly service',
        caption: 'Friendly and helpful staff'
      }
    ],
    autoPlay: true,
    interval: 4000
  };

  const aboutData = {
    title: 'About Our Store',
    description: 'Serving the community for over 20 years, we are your trusted neighborhood general store. We stock a wide variety of groceries, household items, stationery, and daily essentials. Our commitment is to provide quality products at fair prices with a smile.',
    features: [
      'Daily essentials and groceries',
      'Fresh fruits and vegetables',
      'Household items and kitchenware',
      'Stationery and school supplies',
      'Personal care products',
      'Home delivery service available'
    ],
    image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=800',
    imagePosition: 'left'
  };

  const contactData = {
    title: 'Visit Our Store',
    phone: '+91 7876543210',
    email: 'info@communitystore.com',
    address: 'Laitumkhrah, Shillong - 793003',
    hours: [
      'Monday - Sunday: 7:00 AM - 10:00 PM'
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

export default GeneralStorePage;
