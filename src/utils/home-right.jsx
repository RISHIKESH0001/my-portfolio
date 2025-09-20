import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import img1 from '../assets/images/image1.jpg';
import img2 from '../assets/images/image2.jpg';
import img3 from '../assets/images/image3.jpg';
import img4 from '../assets/images/image4.jpg';
import img5 from '../assets/images/image5.jpg';

const CylindricalSlider = () => {
  const images = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const calculatePosition = (index) => {
    const distance = (index - currentIndex + images.length) % images.length;
    const angle = (distance / images.length) * 360;
    const radius = 250;
    
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius;
    
    const isFront = distance === 0;
    const baseScale = isFront ? 1.0 : 0.6;
    const scale = baseScale + (z + radius) / (2 * radius) * 0.2;
    
    return {
      transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
      opacity: z > 0 ? 0.5 + (z / radius) * 0.5 : 0.3,
      zIndex: Math.round(z),
      filter: `brightness(${0.3 + (z + radius) / (2 * radius)})`,
    };
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center perspective-1000 overflow-hidden">
      {/* Navigation arrows with higher z-index and pointer-events-auto */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 z-50 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-all pointer-events-auto"
      >
        <FiChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 z-50 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-all pointer-events-auto"
      >
        <FiChevronRight size={24} />
      </button>
  
      {/* Cylindrical container with pointer-events-none */}
      <div className="relative w-full h-full flex items-center justify-center preserve-3d pointer-events-none">
        {images.map((image, index) => {
          const position = calculatePosition(index);
          return (
            <div
              key={index}
              className="absolute transition-all duration-700 ease-in-out rounded-lg shadow-xl overflow-hidden pointer-events-none"
              style={{
                width: '400px',
                height: '400px',
                transform: position.transform,
                opacity: position.opacity,
                zIndex: position.zIndex,
                filter: position.filter,
              }}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CylindricalSlider;