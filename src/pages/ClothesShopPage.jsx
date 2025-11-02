import React from 'react';
import { ShopTemplate } from '../components/shops';

function ClothesShopPage() {
  const heroData = {
    title: 'Fashion Boutique',
    subtitle: 'Trendy & Stylish Clothing - Express Your Unique Style',
    backgroundImage: null,
    ctaText: 'Shop Collection',
    ctaLink: '#contact'
  };

  const carouselData = {
    images: [
      {
        url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800',
        alt: 'Boutique interior',
        caption: 'Curated fashion collection'
      },
      {
        url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800',
        alt: 'Latest trends',
        caption: 'Latest fashion trends and styles'
      },
      {
        url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800',
        alt: 'Shopping experience',
        caption: 'Premium shopping experience'
      }
    ],
    autoPlay: true,
    interval: 4000
  };

  const aboutData = {
    title: 'About Our Boutique',
    description: 'Welcome to our fashion boutique where style meets affordability. We curate the latest trends in clothing for men, women, and children. From casual wear to party outfits, ethnic wear to western fashion, our collection is designed to help you express your unique style with confidence.',
    features: [
      'Latest fashion trends and seasonal collections',
      'Wide range of sizes and styles',
      'Ethnic and western wear',
      'Accessories and fashion jewelry',
      'Personal styling consultation',
      'Easy exchange and return policy'
    ],
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800',
    imagePosition: 'left'
  };

  const contactData = {
    title: 'Visit Our Boutique',
    phone: '+91 6123456789',
    email: 'hello@fashionboutique.com',
    address: 'Police Bazar, Shillong - 793001',
    hours: [
      'Monday - Saturday: 10:00 AM - 8:30 PM',
      'Sunday: 11:00 AM - 7:00 PM'
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

export default ClothesShopPage;
