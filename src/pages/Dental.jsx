import React from 'react';

export default function DentistryClinic() {
  const galleryImages = [
    { id: 1, icon: '🏥', label: 'Modern Facility' },
    { id: 2, icon: '🦷', label: 'Advanced Equipment' },
    { id: 3, icon: '💺', label: 'Comfortable Chairs' },
    { id: 4, icon: '👨‍⚕️', label: 'Expert Team' },
    { id: 5, icon: '🔬', label: 'Latest Technology' },
    { id: 6, icon: '✨', label: 'Clean Environment' },
  ];

  const services = [
    { title: 'General Dentistry', desc: 'Comprehensive dental exams, cleanings, fillings, and preventive care.' },
    { title: 'Cosmetic Dentistry', desc: 'Teeth whitening, veneers, and smile makeovers for a confident smile.' },
    { title: 'Orthodontics', desc: 'Braces and clear aligners to straighten teeth and improve your bite.' },
    { title: 'Dental Implants', desc: 'Permanent tooth replacement that looks and feels natural.' },
    { title: 'Root Canal Therapy', desc: 'Expert treatment to save infected teeth and eliminate pain.' },
    { title: 'Emergency Care', desc: 'Same-day appointments for dental emergencies and urgent care.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 shadow-lg text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">🦷 Bright Smile Dental Clinic</h1>
          <p className="text-xl md:text-2xl opacity-95">Your Partner in Dental Health Excellence</p>
        </div>
      </header>

      {/* Navigation */}
      {/* <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-6 py-4">
            {['Gallery', 'About', 'Services', 'Location', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-blue-600 font-semibold hover:text-blue-800">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav> */}

      {/* Gallery */}
      <section id="gallery" className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-4">Experience Our Clinic</h2>
          <p className="text-center text-gray-600 mb-8 text-lg">Take a virtual tour of our state-of-the-art facility</p>
          
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6">
              {galleryImages.map((item) => (
                <div key={item.id} className="flex-shrink-0 w-80 h-64 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group">
                  <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <p className="text-blue-800 font-semibold text-lg">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">← Scroll horizontally to view more →</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Welcome to Our Clinic</h2>
          <p className="text-center text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            At Bright Smile Dental Clinic, we're dedicated to providing exceptional dental care in a comfortable, 
            welcoming environment. With over 15 years of experience, our team of skilled dentists and hygienists 
            use the latest technology to ensure your smile stays healthy and bright.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Visit Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-blue-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-3">📍 Address</h3>
              <p className="text-gray-700">123 Dental Avenue<br/>Suite 200<br/>Healthcare District<br/>New York, NY 10001</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-3">📞 Phone</h3>
              <p className="text-gray-700">(555) 123-4567<br/><br/>Emergency: (555) 123-4568</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-3">🕐 Hours</h3>
              <p className="text-gray-700">Mon-Fri: 8:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 3:00 PM<br/>Sunday: Closed</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-3">✉️ Email</h3>
              <p className="text-gray-700">info@brightsmile.com<br/><br/>appointments@brightsmile.com</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0160%2C40.7028%2C-73.9960%2C40.7228&layer=mapnik&marker=40.7128%2C-74.0060"
              width="100%"
              height="400"
              style={{ border: 0 }}
              title="Clinic Location Map"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Schedule Your Appointment</h2>
          <p className="text-xl mb-8">Ready to achieve your best smile? Contact us today!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:5551234567" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
              Call Now
            </a>
            <a href="mailto:appointments@brightsmile.com" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* <p className="text-lg">&copy; 2025 Bright Smile Dental Clinic. All rights reserved.</p> */}
          <p className="text-gray-400 mt-2">Providing Quality Dental Care Since 2025</p>
        </div>
      </footer>
    </div>
  );
}