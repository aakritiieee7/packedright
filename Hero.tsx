import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [tickerPosition, setTickerPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerPosition(prev => prev - 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const materials = [
    'Plastic', 'Cardboard', 'Biodegradable', 'Compostable', 
    'E-waste', 'Metal', 'Glass', 'Paper', 'Aluminum'
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(6,95,70,0.6)), url('https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in-up">
          Is your pack <span className="text-green-300">planet-smart</span>?
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
          PackedRight? helps you detect, assess, and rethink your product's packaging.
        </p>
        
        <button className="bg-green-400 hover:bg-green-300 text-gray-900 px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-600">
          Try It Now
        </button>
      </div>

      {/* Moving Ticker */}
      <div className="absolute bottom-20 left-0 right-0 overflow-hidden">
        <div 
          className="flex whitespace-nowrap text-green-300 text-lg font-medium"
          style={{ transform: `translateX(${tickerPosition}px)` }}
        >
          {[...materials, ...materials, ...materials].map((material, index) => (
            <span key={index} className="mx-8">
              {material} ·
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;