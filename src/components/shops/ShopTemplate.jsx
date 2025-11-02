import React from 'react';
import ShopHero from './ShopHero';
import ShopCarousel from './ShopCarousel';
import ShopAbout from './ShopAbout';
import ShopContact from './ShopContact';

/**
 * ShopTemplate - A reusable template for shop pages
 * 
 * @param {Object} heroData - Data for hero section
 * @param {Object} carouselData - Images array for carousel
 * @param {Object} aboutData - Data for about section
 * @param {Object} contactData - Contact information and map data
 * @param {React.ReactNode} children - Optional additional content
 */
function ShopTemplate({ 
  heroData, 
  carouselData, 
  aboutData, 
  contactData,
  children 
}) {
  return (
    <div className="shop-page">
      {/* Hero Section */}
      {heroData && (
        <ShopHero {...heroData} />
      )}

      {/* Carousel Section */}
      {carouselData && carouselData.images && carouselData.images.length > 0 && (
        <ShopCarousel {...carouselData} />
      )}

      {/* About Section */}
      {aboutData && (
        <ShopAbout {...aboutData} />
      )}

      {/* Custom Content (if any) */}
      {children}

      {/* Contact Section */}
      {contactData && (
        <ShopContact {...contactData} />
      )}
    </div>
  );
}

export default ShopTemplate;
