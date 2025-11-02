import React from 'react';
import { ShopTemplate } from '../components/shops';

function TailoringPage() {
  const heroData = {
    title: 'Master Tailoring Services',
    subtitle: 'Perfect Fit, Every Time - Custom Tailoring & Alterations',
    backgroundImage: null,
    ctaText: 'Get Fitted',
    ctaLink: '#contact'
  };

  const carouselData = {
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800',
        alt: 'Tailoring workshop',
        caption: 'Professional tailoring workshop'
      },
      {
        url: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800',
        alt: 'Fabric selection',
        caption: 'Premium fabrics and materials'
      },
      {
        url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800',
        alt: 'Custom suits',
        caption: 'Custom-made suits and formal wear'
      }
    ],
    autoPlay: true,
    interval: 4000
  };

  const aboutData = {
    title: 'About Our Tailoring Services',
    description: 'With over 30 years of expertise in tailoring, we pride ourselves on delivering perfectly fitted garments. Our master tailors combine traditional craftsmanship with modern techniques to create custom clothing that reflects your style and personality. From wedding suits to casual wear, we handle it all with precision.',
    features: [
      'Expert tailors with 30+ years experience',
      'Custom-made suits, shirts, and traditional wear',
      'Alterations and repairs',
      'Wide selection of premium fabrics',
      'Fast turnaround time',
      'Competitive pricing'
    ],
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800',
    imagePosition: 'right'
  };

  const contactData = {
    title: 'Visit Our Workshop',
    phone: '+91 7123456789',
    email: 'master@tailoring.com',
    address: 'Khyndai Lad, Shillong - 793004',
    hours: [
      'Monday - Saturday: 9:00 AM - 7:00 PM',
      'Sunday: 10:00 AM - 2:00 PM'
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

export default TailoringPage;
