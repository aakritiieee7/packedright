import React, { useState } from 'react';
import { Upload, Camera, Smartphone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const UploadDemo: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Upload Zone */}
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Start Your <span className="text-green-600">Sustainability</span> Journey
            </h2>
            
            <div 
              className={`border-3 border-dashed border-green-400 rounded-2xl p-12 text-center transition-all duration-300 cursor-pointer ${
                isHovered ? 'border-green-600 bg-green-50 scale-105' : 'bg-green-25'
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Upload size={64} className="mx-auto text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Drop your packaging photo here
              </h3>
              <p className="text-gray-600 mb-6">
                Our AI will analyze the materials and environmental impact
              </p>
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Choose File
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 inline-block">
                    <Smartphone size={48} className="text-green-600" />
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md inline-block">
                    <Camera size={32} className="text-gray-600" />
                  </div>
                  <p className="text-green-800 font-medium mt-4">
                    Scan packaging with your phone
                  </p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg animate-float">
                <span className="text-2xl">📱</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-400 rounded-full p-3 shadow-lg animate-float animation-delay-500">
                <span className="text-2xl">♻️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadDemo;