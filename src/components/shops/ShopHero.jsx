import React from 'react';

function ShopHero({ title, subtitle, backgroundImage, ctaText, ctaLink }) {
  return (
    <div 
      className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white"
      style={{ 
        backgroundImage: backgroundImage 
          ? `url(${backgroundImage})` 
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <a 
            href={ctaLink}
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            {ctaText}
          </a>
        )}
      </div>
    </div>
  );
}

export default ShopHero;
