import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function ShopContact({ 
  title = 'Contact Us',
  phone, 
  email, 
  address, 
  hours,
  mapEmbedUrl,
  mapLatitude,
  mapLongitude
}) {
  // Generate Google Maps embed URL if coordinates are provided
  const getMapUrl = () => {
    if (mapEmbedUrl) {
      return mapEmbedUrl;
    }
    if (mapLatitude && mapLongitude) {
      return `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15000!2d${mapLongitude}!3d${mapLatitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890`;
    }
    return null;
  };

  const mapUrl = getMapUrl();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          {title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h3>
            
            <div className="space-y-4">
              {phone && (
                <div className="flex items-start">
                  <FaPhone className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <a href={`tel:${phone}`} className="text-gray-600 hover:text-blue-600">
                      {phone}
                    </a>
                  </div>
                </div>
              )}

              {email && (
                <div className="flex items-start">
                  <FaEnvelope className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <a href={`mailto:${email}`} className="text-gray-600 hover:text-blue-600">
                      {email}
                    </a>
                  </div>
                </div>
              )}

              {address && (
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600">{address}</p>
                  </div>
                </div>
              )}

              {hours && hours.length > 0 && (
                <div className="flex items-start">
                  <FaClock className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Business Hours</p>
                    <div className="text-gray-600 space-y-1">
                      {hours.map((hour, index) => (
                        <p key={index}>{hour}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Form */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Send us a Message</h4>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Find Us</h3>
            {mapUrl ? (
              <div className="rounded-lg overflow-hidden shadow-lg h-[600px]">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location map"
                ></iframe>
              </div>
            ) : (
              <div className="bg-gray-300 rounded-lg h-[600px] flex items-center justify-center">
                <p className="text-gray-600 text-center px-4">
                  Map location will be displayed here.<br/>
                  Please provide mapEmbedUrl or coordinates.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopContact;
