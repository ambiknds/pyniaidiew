import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function ShopAbout({ title, description, features, image, imagePosition = 'right' }) {
  const isImageRight = imagePosition === 'right';

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={isImageRight ? 'order-1' : 'order-1 md:order-2'}>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              {title || 'About Us'}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            
            {features && features.length > 0 && (
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Image */}
          <div className={isImageRight ? 'order-2' : 'order-2 md:order-1'}>
            {image ? (
              <img
                src={image}
                alt={title || 'About us'}
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            ) : (
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-2xl h-96 flex items-center justify-center">
                <p className="text-white text-xl font-semibold">Your Image Here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopAbout;
