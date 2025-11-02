# Shop Pages Template System - User Guide

This guide explains how to use the reusable shop page components to create and customize shop pages for your business directory.

## 📁 Project Structure

```
src/
├── components/
│   └── shops/
│       ├── ShopHero.jsx          # Hero section component
│       ├── ShopCarousel.jsx      # Image carousel component
│       ├── ShopAbout.jsx         # About section component
│       ├── ShopContact.jsx       # Contact section with map
│       ├── ShopTemplate.jsx      # Main template wrapper
│       └── index.js              # Exports all components
├── pages/
│   ├── ClinicPage.jsx            # Example: Clinic page
│   ├── BakeryPage.jsx            # Example: Bakery page
│   ├── WholesalePage.jsx         # Example: Wholesale page
│   ├── GeneralStorePage.jsx      # Example: General store page
│   ├── ShoeStorePage.jsx         # Example: Shoe store page
│   ├── DepartmentalStorePage.jsx # Example: Departmental store page
│   ├── TailoringPage.jsx         # Example: Tailoring page
│   └── ClothesShopPage.jsx       # Example: Clothes shop page
└── config/
    └── shopDataExamples.js       # Data structure examples
```

## 🎯 Available Shop Pages

The following shop pages are ready to use:

1. **Clinic** - `/clinic`
2. **Bakery** - `/bakery`
3. **Wholesale Shop** - `/wholesale`
4. **General Store** - `/general-store`
5. **Shoe Store** - `/shoe-store`
6. **Departmental Store** - `/departmental-store`
7. **Tailoring Shop** - `/tailoring`
8. **Clothes Shop** - `/clothes`

## 🧩 Reusable Components

### 1. ShopHero
Hero section with background image, title, subtitle, and call-to-action button.

**Props:**
- `title` (string, required) - Main heading
- `subtitle` (string, optional) - Subtitle text
- `backgroundImage` (string, optional) - URL to background image
- `ctaText` (string, optional) - Call-to-action button text
- `ctaLink` (string, optional) - Call-to-action button link

### 2. ShopCarousel
Image carousel with auto-play and navigation controls.

**Props:**
- `images` (array, required) - Array of image objects with `url`, `alt`, and optional `caption`
- `autoPlay` (boolean, optional, default: true) - Enable auto-play
- `interval` (number, optional, default: 5000) - Auto-play interval in milliseconds

### 3. ShopAbout
About section with description, features list, and image.

**Props:**
- `title` (string, optional) - Section title
- `description` (string, required) - About text
- `features` (array, optional) - Array of feature strings
- `image` (string, optional) - Image URL
- `imagePosition` (string, optional, default: 'right') - 'right' or 'left'

### 4. ShopContact
Contact section with contact information, form, and map.

**Props:**
- `title` (string, optional) - Section title
- `phone` (string, optional) - Phone number
- `email` (string, optional) - Email address
- `address` (string, optional) - Physical address
- `hours` (array, optional) - Array of business hours strings
- `mapEmbedUrl` (string, optional) - Google Maps embed URL
- `mapLatitude` (number, optional) - Latitude for map
- `mapLongitude` (number, optional) - Longitude for map

### 5. ShopTemplate
Main wrapper component that combines all sections.

**Props:**
- `heroData` (object, optional) - Data for hero section
- `carouselData` (object, optional) - Data for carousel section
- `aboutData` (object, optional) - Data for about section
- `contactData` (object, optional) - Data for contact section
- `children` (ReactNode, optional) - Additional custom content

## 🚀 How to Create a New Shop Page

### Step 1: Create the Page File

Create a new file in `src/pages/`, for example `RestaurantPage.jsx`:

```jsx
import React from 'react';
import { ShopTemplate } from '../components/shops';

function RestaurantPage() {
  // Define your data objects here (see Step 2)
  
  return <ShopTemplate 
    heroData={heroData}
    carouselData={carouselData}
    aboutData={aboutData}
    contactData={contactData}
  />;
}

export default RestaurantPage;
```

### Step 2: Define Your Data

```jsx
const heroData = {
  title: 'Fine Dining Restaurant',
  subtitle: 'Experience Culinary Excellence',
  backgroundImage: '/images/restaurant-bg.jpg',
  ctaText: 'Reserve Table',
  ctaLink: '#contact'
};

const carouselData = {
  images: [
    {
      url: '/images/restaurant-1.jpg',
      alt: 'Restaurant interior',
      caption: 'Elegant dining atmosphere'
    },
    {
      url: '/images/restaurant-2.jpg',
      alt: 'Signature dish',
      caption: 'Our signature dishes'
    },
    {
      url: '/images/restaurant-3.jpg',
      alt: 'Chef cooking',
      caption: 'Expert chefs at work'
    }
  ],
  autoPlay: true,
  interval: 5000
};

const aboutData = {
  title: 'About Our Restaurant',
  description: 'We serve authentic cuisine with fresh ingredients...',
  features: [
    'Farm-to-table fresh ingredients',
    'Award-winning chef',
    'Extensive wine collection',
    'Private dining rooms available',
    'Catering services',
    'Vegetarian and vegan options'
  ],
  image: '/images/about-restaurant.jpg',
  imagePosition: 'right'
};

const contactData = {
  title: 'Visit Us',
  phone: '+91 1234567890',
  email: 'info@restaurant.com',
  address: 'Your Address Here',
  hours: [
    'Lunch: 12:00 PM - 3:00 PM',
    'Dinner: 6:00 PM - 11:00 PM',
    'Closed on Mondays'
  ],
  mapLatitude: 25.5788,
  mapLongitude: 91.8933
};
```

### Step 3: Add Route to App.jsx

```jsx
// Import your new page
import RestaurantPage from './pages/RestaurantPage';

// Add route in the Routes section
<Route path="/restaurant" element={<RestaurantPage />} />
```

## 🖼️ Working with Images

### Option 1: Use Local Images
1. Place images in `public/images/` folder
2. Reference them as: `/images/your-image.jpg`

### Option 2: Use External URLs
1. Use free stock photo sites (Unsplash, Pexels, Pixabay)
2. Or upload to image hosting service
3. Use full URL: `https://example.com/image.jpg`

### Recommended Image Sizes
- Hero background: 1920x1080px or larger
- Carousel images: 1200x800px
- About section image: 800x600px

## 🗺️ Adding Google Maps

### Method 1: Use Embed URL
1. Go to [Google Maps](https://maps.google.com)
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Use it in `mapEmbedUrl` prop

### Method 2: Use Coordinates
Simply provide `mapLatitude` and `mapLongitude`:
```jsx
mapLatitude: 25.5788,
mapLongitude: 91.8933
```

## 🎨 Customization Tips

### Colors and Styling
All components use Tailwind CSS. To customize:
1. Edit the component files in `src/components/shops/`
2. Modify className attributes
3. Update Tailwind config if needed

### Adding Custom Sections
Use the `children` prop in ShopTemplate:

```jsx
<ShopTemplate 
  heroData={heroData}
  carouselData={carouselData}
  aboutData={aboutData}
  contactData={contactData}
>
  {/* Your custom section */}
  <section className="py-16 bg-blue-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">Special Offers</h2>
      {/* Custom content here */}
    </div>
  </section>
</ShopTemplate>
```

### Conditional Sections
You can omit any section by passing `null` or `undefined`:

```jsx
<ShopTemplate 
  heroData={heroData}
  carouselData={null}  // No carousel
  aboutData={aboutData}
  contactData={contactData}
/>
```

## 📱 Responsive Design

All components are fully responsive and work on:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🔧 Troubleshooting

### Images not showing
- Check file path is correct
- Ensure images are in `public/` folder for local images
- Verify external URLs are accessible

### Map not displaying
- Provide either `mapEmbedUrl` OR both `mapLatitude` and `mapLongitude`
- Check coordinates are valid numbers

### Styling issues
- Ensure Tailwind CSS is properly configured
- Check for conflicting CSS classes
- Clear browser cache

## 📚 Additional Resources

- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 💡 Tips for Best Results

1. **Use high-quality images** - Sharp, well-lit photos make better impressions
2. **Keep descriptions concise** - 2-3 paragraphs for about section
3. **Highlight unique features** - Focus on what makes your business special
4. **Update contact info regularly** - Keep hours and contact details current
5. **Test on mobile** - Most users will view on phones
6. **Optimize images** - Compress images for faster loading

## 🆘 Need Help?

If you need to create a new type of shop page or customize components:
1. Check the example pages in `src/pages/`
2. Review `src/config/shopDataExamples.js`
3. Modify component files in `src/components/shops/`

---

**Created with ❤️ for Pyniaidiew Business Directory**
