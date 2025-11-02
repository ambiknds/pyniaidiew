import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function ShopCarousel({ images, autoPlay = true, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Gallery</h2>
        <div className="relative max-w-5xl mx-auto">
          {/* Main Image */}
          <div className="relative h-96 overflow-hidden rounded-lg shadow-xl">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].alt || `Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            {images[currentIndex].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                <p className="text-center">{images[currentIndex].caption}</p>
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all"
                aria-label="Previous slide"
              >
                <FaChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all"
                aria-label="Next slide"
              >
                <FaChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Dots Navigation */}
          {images.length > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ShopCarousel;
