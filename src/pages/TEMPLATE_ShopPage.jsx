import React from 'react';
import { ShopTemplate } from '../components/shops';

/**
 * TEMPLATE FOR CREATING NEW SHOP PAGES
 * 
 * Instructions:
 * 1. Copy this file and rename it (e.g., PharmacyPage.jsx)
 * 2. Update the function name to match the file name
 * 3. Customize all data objects below
 * 4. Import and add route in App.jsx
 * 5. Replace placeholder images with real ones
 */

function TemplateShopPage() {
  // ========================================
  // HERO SECTION DATA
  // ========================================
  const heroData = {
    title: 'Your Shop Name Here',
    subtitle: 'Your catchy tagline or description',
    backgroundImage: null, // Add image URL or leave null for gradient
    ctaText: 'Call to Action', // e.g., 'Shop Now', 'Book Appointment', 'Get Quote'
    ctaLink: '#contact' // Where the button should link to
  };

  // ========================================
  // CAROUSEL/GALLERY DATA
  // ========================================
  const carouselData = {
    images: [
      {
        url: 'https://via.placeholder.com/1200x800/667eea/ffffff?text=Image+1',
        alt: 'Description of first image',
        caption: 'Optional caption for first image'
      },
      {
        url: 'https://via.placeholder.com/1200x800/764ba2/ffffff?text=Image+2',
        alt: 'Description of second image',
        caption: 'Optional caption for second image'
      },
      {
        url: 'https://via.placeholder.com/1200x800/f093fb/ffffff?text=Image+3',
        alt: 'Description of third image',
        caption: 'Optional caption for third image'
      }
    ],
    autoPlay: true,  // Set to false to disable auto-play
    interval: 5000   // Time in milliseconds (5000 = 5 seconds)
  };

  // ========================================
  // ABOUT SECTION DATA
  // ========================================
  const aboutData = {
    title: 'About Our Business',
    description: `
      Write a compelling description of your business here. 
      This should be 2-3 paragraphs explaining what makes your business special, 
      your history, mission, and what customers can expect when they visit.
      
      Keep it informative but concise. Focus on the unique value you provide.
    `,
    features: [
      'First key feature or benefit',
      'Second key feature or benefit',
      'Third key feature or benefit',
      'Fourth key feature or benefit',
      'Fifth key feature or benefit',
      'Sixth key feature or benefit'
    ],
    image: 'https://via.placeholder.com/800x600/667eea/ffffff?text=About+Image',
    imagePosition: 'right' // Options: 'right' or 'left'
  };

  // ========================================
  // CONTACT SECTION DATA
  // ========================================
  const contactData = {
    title: 'Get In Touch', // Optional, defaults to 'Contact Us'
    phone: '+91 1234567890',
    email: 'info@yourshop.com',
    address: 'Your complete address here, City - Pincode',
    hours: [
      'Monday - Friday: 9:00 AM - 8:00 PM',
      'Saturday: 9:00 AM - 6:00 PM',
      'Sunday: 10:00 AM - 4:00 PM'
    ],
    // OPTION 1: Provide coordinates (easiest)
    mapLatitude: 25.5788,   // Replace with your latitude
    mapLongitude: 91.8933,  // Replace with your longitude
    
    // OPTION 2: Provide Google Maps embed URL (more accurate)
    // mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!...'
    // To get: Go to Google Maps → Share → Embed a map → Copy iframe src
  };

  // ========================================
  // RENDER THE PAGE
  // ========================================
  return (
    <ShopTemplate 
      heroData={heroData}
      carouselData={carouselData}
      aboutData={aboutData}
      contactData={contactData}
    >
      {/* 
        OPTIONAL: Add custom sections here
        
        Example:
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">
              Special Offers
            </h2>
            <p className="text-center text-gray-600">
              Your custom content here...
            </p>
          </div>
        </section>
      */}
    </ShopTemplate>
  );
}

export default TemplateShopPage;

/*
 * CHECKLIST FOR NEW PAGE:
 * 
 * □ Renamed file to match your shop type (e.g., PharmacyPage.jsx)
 * □ Updated function name (line 15)
 * □ Changed heroData title and subtitle
 * □ Replaced carousel images with real shop photos
 * □ Wrote custom about description
 * □ Listed relevant features
 * □ Added correct contact information
 * □ Set proper map coordinates or embed URL
 * □ Imported in App.jsx
 * □ Added route in App.jsx
 * □ Tested the page in browser
 */
