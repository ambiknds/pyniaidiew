# 🏪 Shop Pages Template System

A complete, reusable component system for creating beautiful shop/business pages with consistent design.

## 🚀 Quick Start

### 1. View the Component Showcase
```
npm run dev
```
Then visit: **http://localhost:5173/component-showcase**

### 2. View Example Shop Pages
- Clinic: http://localhost:5173/clinic
- Bakery: http://localhost:5173/bakery
- Wholesale: http://localhost:5173/wholesale
- General Store: http://localhost:5173/general-store
- Shoe Store: http://localhost:5173/shoe-store
- Departmental Store: http://localhost:5173/departmental-store
- Tailoring: http://localhost:5173/tailoring
- Clothes Shop: http://localhost:5173/clothes

## 📦 What's Included

### Reusable Components
- ✅ **ShopHero** - Eye-catching hero section
- ✅ **ShopCarousel** - Auto-playing image gallery
- ✅ **ShopAbout** - About section with features
- ✅ **ShopContact** - Contact form + Google Maps
- ✅ **ShopTemplate** - Complete page wrapper

### Ready-to-Use Pages
- ✅ 8 fully functional shop pages
- ✅ All routes configured in App.jsx
- ✅ Sample data and images
- ✅ Responsive design

### Documentation
- 📚 **SHOP_PAGES_GUIDE.md** - Complete user guide
- 📄 **SHOP_PAGES_SUMMARY.md** - Quick overview
- 📝 **shopDataExamples.js** - Data structure templates
- 🎨 **ComponentShowcase** - Live component preview

## 🎯 Create a New Shop Page in 5 Minutes

### Step 1: Copy the Template
```bash
# Copy the template file
cp src/pages/TEMPLATE_ShopPage.jsx src/pages/PharmacyPage.jsx
```

### Step 2: Customize the Data
Open `PharmacyPage.jsx` and update:
- Function name: `TemplateShopPage` → `PharmacyPage`
- Hero title and subtitle
- Carousel images
- About description and features
- Contact information and location

### Step 3: Add Route
In `App.jsx`:
```jsx
// Import
import PharmacyPage from './pages/PharmacyPage';

// Add route
<Route path="/pharmacy" element={<PharmacyPage />} />
```

### Step 4: Test
Visit: http://localhost:5173/pharmacy

## 📝 Data Structure

### Minimal Example
```jsx
import { ShopTemplate } from '../components/shops';

function MyShopPage() {
  return <ShopTemplate 
    heroData={{
      title: 'My Shop',
      subtitle: 'Quality Products & Services'
    }}
    aboutData={{
      description: 'We are awesome...',
      features: ['Fast', 'Affordable', 'Quality']
    }}
    contactData={{
      phone: '+91 1234567890',
      email: 'info@shop.com',
      address: 'Your Address',
      mapLatitude: 25.5788,
      mapLongitude: 91.8933
    }}
  />;
}
```

### Full Example
See any page in `src/pages/` (e.g., `ClinicPage.jsx`, `BakeryPage.jsx`)

## 🖼️ Working with Images

### Local Images
1. Place in `public/images/`
2. Reference: `/images/your-photo.jpg`

### External Images
Use direct URLs from:
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Your own hosting

### Recommended Sizes
- Hero background: 1920×1080px
- Carousel: 1200×800px
- About image: 800×600px

## 🗺️ Adding Maps

### Option 1: Coordinates (Easiest)
```jsx
contactData={{
  mapLatitude: 25.5788,
  mapLongitude: 91.8933
}}
```

### Option 2: Google Maps Embed
1. Go to Google Maps
2. Find your location
3. Click Share → Embed a map
4. Copy the iframe src URL
```jsx
contactData={{
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18...'
}}
```

## 🎨 Customization

### Change Colors
Edit component files in `src/components/shops/` and modify Tailwind classes.

### Add Custom Sections
```jsx
<ShopTemplate {...allData}>
  <section className="py-16 bg-blue-50">
    <div className="container mx-auto px-6">
      <h2>My Custom Section</h2>
    </div>
  </section>
</ShopTemplate>
```

### Skip Sections
Pass `null` to omit:
```jsx
<ShopTemplate 
  heroData={heroData}
  carouselData={null}  // No carousel
  aboutData={aboutData}
  contactData={contactData}
/>
```

## 📱 Responsive Design

All components are responsive:
- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Large screens (1280px+)

## 🛠️ Tech Stack

- React 18
- React Router DOM 6
- Tailwind CSS 3
- React Icons
- Vite

## 📂 File Structure

```
src/
├── components/shops/
│   ├── ShopHero.jsx
│   ├── ShopCarousel.jsx
│   ├── ShopAbout.jsx
│   ├── ShopContact.jsx
│   ├── ShopTemplate.jsx
│   └── index.js
├── pages/
│   ├── TEMPLATE_ShopPage.jsx  ← Copy this!
│   ├── ComponentShowcase.jsx  ← View components
│   ├── ClinicPage.jsx
│   ├── BakeryPage.jsx
│   ├── WholesalePage.jsx
│   ├── GeneralStorePage.jsx
│   ├── ShoeStorePage.jsx
│   ├── DepartmentalStorePage.jsx
│   ├── TailoringPage.jsx
│   └── ClothesShopPage.jsx
└── config/
    └── shopDataExamples.js
```

## 🔍 Troubleshooting

### Images not showing?
- Check file path is correct
- Ensure images are in `public/images/`
- Verify URLs are accessible

### Map not displaying?
- Provide either `mapEmbedUrl` OR coordinates
- Check coordinates are valid numbers

### Styling issues?
- Clear browser cache
- Check Tailwind is properly configured
- Look for conflicting CSS classes

## 💡 Pro Tips

1. **Use high-quality images** - Clear, professional photos
2. **Keep descriptions concise** - 2-3 paragraphs max
3. **Highlight unique value** - What makes you special?
4. **Update regularly** - Keep hours and contact info current
5. **Test on mobile** - Most users browse on phones
6. **Optimize images** - Compress for faster loading

## 📖 Full Documentation

- **SHOP_PAGES_GUIDE.md** - Detailed instructions
- **SHOP_PAGES_SUMMARY.md** - Quick reference
- **shopDataExamples.js** - Code examples

## 🎓 Learn by Example

1. Visit `/component-showcase` to see all components
2. Open `ClinicPage.jsx` or `BakeryPage.jsx` to see usage
3. Copy `TEMPLATE_ShopPage.jsx` to start your own

## ✅ Checklist for New Page

- [ ] Copy `TEMPLATE_ShopPage.jsx`
- [ ] Rename file and function
- [ ] Update all text content
- [ ] Replace placeholder images
- [ ] Add correct contact info
- [ ] Set map location
- [ ] Import in `App.jsx`
- [ ] Add route in `App.jsx`
- [ ] Test in browser
- [ ] Check mobile responsiveness

## 🆘 Need Help?

1. Check the component showcase: `/component-showcase`
2. Review example pages in `src/pages/`
3. Read `SHOP_PAGES_GUIDE.md`
4. Look at `shopDataExamples.js`

---

**Happy Building! 🚀**

Created for Pyniaidiew Business Directory
