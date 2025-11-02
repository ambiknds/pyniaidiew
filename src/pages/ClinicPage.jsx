import React from 'react';
import { ShopTemplate } from '../components/shops';

function ClinicPage() {
  const heroData = {
    title: 'Premium Health Clinic',
    subtitle: 'Your Health, Our Priority - Quality Healthcare Services',
    backgroundImage: null, // Add your image URL here
    ctaText: 'Book Appointment',
    ctaLink: '#contact'
  };

  const carouselData = {
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
        alt: 'Clinic reception',
        caption: 'Modern and welcoming reception area'
      },
      {
        url: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800',
        alt: 'Medical equipment',
        caption: 'State-of-the-art medical equipment'
      },
      {
        url: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800',
        alt: 'Consultation room',
        caption: 'Comfortable consultation rooms'
      }
    ],
    autoPlay: true,
    interval: 4000
  };

  const aboutData = {
    title: 'About Our Clinic',
    description: 'We are a modern healthcare facility dedicated to providing exceptional medical care to our community. With experienced doctors, advanced medical technology, and a patient-first approach, we ensure you receive the best treatment possible.',
    features: [
      'Experienced and certified medical professionals',
      'Modern diagnostic equipment and facilities',
      '24/7 emergency services available',
      'Comprehensive health check-up packages',
      'Insurance accepted and cashless facility',
      'Child-friendly environment'
    ],
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800',
    imagePosition: 'right'
  };

  const contactData = {
    title: 'Visit Us Today',
    phone: '+91 1234567890',
    email: 'info@premiumclinic.com',
    address: 'Main Street, City Center, Shillong - 793001',
    hours: [
      'Monday - Friday: 9:00 AM - 8:00 PM',
      'Saturday: 9:00 AM - 6:00 PM',
      'Sunday: 10:00 AM - 4:00 PM',
      'Emergency: 24/7'
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

export default ClinicPage;
