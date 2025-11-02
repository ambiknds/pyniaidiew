import React from 'react';
import { ShopHero, ShopCarousel, ShopAbout, ShopContact } from '../components/shops';

/**
 * Component Showcase Page
 * This page demonstrates all the reusable shop components
 * Access at: /component-showcase
 */

function ComponentShowcase() {
  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Shop Components Showcase</h1>
          <p className="text-xl">Preview all available components and their features</p>
        </div>
      </div>

      {/* Component Sections */}
      <div className="container mx-auto px-6 py-12">
        
        {/* Hero Component */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">1. ShopHero Component</h2>
          <p className="text-gray-600 mb-6">
            Full-width hero section with background, title, subtitle, and call-to-action.
          </p>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <ShopHero
              title="Welcome to Your Shop"
              subtitle="This is the hero section with a gradient background"
              ctaText="Get Started"
              ctaLink="#demo"
            />
          </div>
        </section>

        {/* Carousel Component */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">2. ShopCarousel Component</h2>
          <p className="text-gray-600 mb-6">
            Auto-playing image carousel with navigation arrows and dots.
          </p>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <ShopCarousel
              images={[
                {
                  url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
                  alt: 'Shop interior',
                  caption: 'Beautiful shop interior design'
                },
                {
                  url: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800',
                  alt: 'Products display',
                  caption: 'Wide variety of quality products'
                },
                {
                  url: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800',
                  alt: 'Customer service',
                  caption: 'Excellent customer service'
                }
              ]}
              autoPlay={true}
              interval={4000}
            />
          </div>
        </section>

        {/* About Component - Right Image */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">3. ShopAbout Component (Image Right)</h2>
          <p className="text-gray-600 mb-6">
            About section with description, features, and image on the right.
          </p>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <ShopAbout
              title="About Our Business"
              description="We are committed to providing the best products and services to our customers. With years of experience and a passion for excellence, we have become a trusted name in the community."
              features={[
                'High-quality products',
                'Affordable prices',
                'Excellent customer service',
                'Fast delivery',
                'Easy returns',
                'Satisfaction guaranteed'
              ]}
              image="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800"
              imagePosition="right"
            />
          </div>
        </section>

        {/* About Component - Left Image */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">4. ShopAbout Component (Image Left)</h2>
          <p className="text-gray-600 mb-6">
            Same component with image on the left side.
          </p>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <ShopAbout
              title="Why Choose Us"
              description="Our commitment to quality and customer satisfaction sets us apart. We believe in building long-lasting relationships with our customers through trust, transparency, and exceptional service."
              features={[
                'Experienced team',
                'Modern facilities',
                'Quality assurance',
                'Competitive pricing',
                'Flexible options',
                'Professional support'
              ]}
              image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800"
              imagePosition="left"
            />
          </div>
        </section>

        {/* Contact Component */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">5. ShopContact Component</h2>
          <p className="text-gray-600 mb-6">
            Contact section with information, form, and embedded map.
          </p>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <ShopContact
              title="Get In Touch"
              phone="+91 1234567890"
              email="demo@shop.com"
              address="123 Main Street, City Center, Shillong - 793001"
              hours={[
                'Monday - Friday: 9:00 AM - 8:00 PM',
                'Saturday: 9:00 AM - 6:00 PM',
                'Sunday: 10:00 AM - 4:00 PM'
              ]}
              mapLatitude={25.5788}
              mapLongitude={91.8933}
            />
          </div>
        </section>

        {/* Usage Guide */}
        <section className="mb-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">How to Use These Components</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Import Components</h3>
              <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { ShopTemplate } from '../components/shops';
// or import individually:
import { ShopHero, ShopCarousel, ShopAbout, ShopContact } from '../components/shops';`}
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Use ShopTemplate (Recommended)</h3>
              <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`<ShopTemplate 
  heroData={heroData}
  carouselData={carouselData}
  aboutData={aboutData}
  contactData={contactData}
/>`}
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Or Use Components Individually</h3>
              <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`<ShopHero title="..." subtitle="..." />
<ShopCarousel images={[...]} />
<ShopAbout title="..." description="..." features={[...]} />
<ShopContact phone="..." email="..." address="..." />`}
              </pre>
            </div>
          </div>
        </section>

        {/* Available Pages */}
        <section className="bg-green-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Available Shop Pages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Clinic', path: '/clinic' },
              { name: 'Bakery', path: '/bakery' },
              { name: 'Wholesale', path: '/wholesale' },
              { name: 'General Store', path: '/general-store' },
              { name: 'Shoe Store', path: '/shoe-store' },
              { name: 'Departmental Store', path: '/departmental-store' },
              { name: 'Tailoring', path: '/tailoring' },
              { name: 'Clothes Shop', path: '/clothes' }
            ].map((page) => (
              <a
                key={page.path}
                href={page.path}
                className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-500"
              >
                <p className="font-semibold text-gray-800">{page.name}</p>
                <p className="text-sm text-gray-500 mt-1">{page.path}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ComponentShowcase;
