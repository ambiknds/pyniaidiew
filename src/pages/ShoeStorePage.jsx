import React from 'react';
import { ShopTemplate } from '../components/shops';

function ShoeStorePage() {
  const heroData = {
    title: 'Premium Footwear Store',
    subtitle: 'Step Into Style - Quality Shoes for Every Occasion',
    backgroundImage: null,
    ctaText: 'Explore Collection',
    ctaLink: '#contact'
  };

  const carouselData = {
    images: [
      {
        url: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800',
        alt: 'Shoe collection',
        caption: 'Latest collection of formal and casual shoes'
      },
      {
        url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800',
        alt: 'Sports shoes',
        caption: 'Premium sports and athletic footwear'
      },
      {
        url: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800',
        alt: 'Store display',
        caption: 'Modern and organized store layout'
      }
    ],
    autoPlay: true,
    interval: 4000
  };

  const aboutData = {
    title: 'About Our Shoe Store',
    description: 'We are passionate about footwear and committed to helping you find the perfect pair. Our store features a curated selection of shoes from leading brands, combining style, comfort, and durability. Whether you need formal shoes, casual sneakers, or sports footwear, we have it all.',
    features: [
      'Wide range of brands and styles',
      'Shoes for men, women, and children',
      'Expert fitting assistance',
      'Quality assurance and warranty',
      'Latest trends and classic designs',
      'Seasonal sales and special offers'
    ],
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800',
    imagePosition: 'right'
  };

  const contactData = {
    title: 'Visit Our Showroom',
    phone: '+91 9123456789',
    email: 'contact@premiumshoes.com',
    address: 'Police Bazar, Shillong - 793001',
    hours: [
      'Monday - Saturday: 10:00 AM - 8:00 PM',
      'Sunday: 10:00 AM - 6:00 PM'
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

export default ShoeStorePage;
