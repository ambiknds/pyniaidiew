/**
 * Shop Data Configuration Examples
 * 
 * This file contains example data structures for creating shop pages.
 * Copy and modify these objects to customize your shop pages.
 */

// Example Hero Data
export const exampleHeroData = {
  title: 'Your Shop Name',
  subtitle: 'Your catchy tagline or description',
  backgroundImage: 'https://your-image-url.com/hero-bg.jpg', // Optional, will use gradient if null
  ctaText: 'Call to Action', // Optional
  ctaLink: '#contact' // Optional
};

// Example Carousel Data
export const exampleCarouselData = {
  images: [
    {
      url: 'https://your-image-url.com/image1.jpg',
      alt: 'Description of image 1',
      caption: 'Caption for image 1' // Optional
    },
    {
      url: 'https://your-image-url.com/image2.jpg',
      alt: 'Description of image 2',
      caption: 'Caption for image 2' // Optional
    },
    {
      url: 'https://your-image-url.com/image3.jpg',
      alt: 'Description of image 3',
      caption: 'Caption for image 3' // Optional
    }
  ],
  autoPlay: true, // Optional, default true
  interval: 5000 // Optional, default 5000ms (5 seconds)
};

// Example About Data
export const exampleAboutData = {
  title: 'About Your Business',
  description: 'Detailed description of your business, its history, mission, and what makes it special...',
  features: [
    'Key feature or benefit 1',
    'Key feature or benefit 2',
    'Key feature or benefit 3',
    'Key feature or benefit 4',
    'Key feature or benefit 5',
    'Key feature or benefit 6'
  ],
  image: 'https://your-image-url.com/about-image.jpg',
  imagePosition: 'right' // or 'left'
};

// Example Contact Data
export const exampleContactData = {
  title: 'Contact Us', // Optional
  phone: '+91 1234567890',
  email: 'info@yourshop.com',
  address: 'Your full address here',
  hours: [
    'Monday - Friday: 9:00 AM - 8:00 PM',
    'Saturday: 9:00 AM - 6:00 PM',
    'Sunday: Closed'
  ],
  // Option 1: Provide embed URL directly
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!...',
  // Option 2: Provide coordinates (latitude and longitude)
  mapLatitude: 25.5788,
  mapLongitude: 91.8933
};

/**
 * How to get Google Maps Embed URL:
 * 1. Go to Google Maps (https://maps.google.com)
 * 2. Search for your location
 * 3. Click "Share" button
 * 4. Click "Embed a map" tab
 * 5. Copy the iframe src URL
 * 
 * Alternative: Just provide latitude and longitude, and a map will be generated
 */

/**
 * Image Sources:
 * - You can use your own images by uploading them to your public folder
 * - Use free stock photo websites like Unsplash, Pexels, or Pixabay
 * - For local images: place them in /public/images/ folder
 *   Then use: '/images/your-image.jpg' as the URL
 */

/**
 * Example Usage in a Shop Page:
 * 
 * import { ShopTemplate } from '../components/shops';
 * 
 * function YourShopPage() {
 *   const heroData = { ... };
 *   const carouselData = { ... };
 *   const aboutData = { ... };
 *   const contactData = { ... };
 * 
 *   return <ShopTemplate 
 *     heroData={heroData}
 *     carouselData={carouselData}
 *     aboutData={aboutData}
 *     contactData={contactData}
 *   />;
 * }
 * 
 * export default YourShopPage;
 */
