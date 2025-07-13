import React from 'react';
import { ArrowRight, RefreshCw, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const InspirationWall: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const alternatives = [
    {
      from: 'Plastic wrap',
      to: 'Compostable paper wrap',
      impact: 'Reduces waste by 85%'
    },
    {
      from: 'Styrofoam containers',
      to: 'Bamboo fiber boxes',
      impact: 'Biodegrades in 6 months'
    },
    {
      from: 'Plastic bottles',
      to: 'Glass containers',
      impact: 'Infinitely recyclable'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="text-green-600">Eco-Friendly</span> Alternatives
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Alternatives List */}
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="space-y-8">
              {alternatives.map((alt, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <span className="text-red-600 font-semibold text-sm">FROM</span>
                      </div>
                      <span className="text-gray-700 font-medium">{alt.from}</span>
                    </div>
                    <ArrowRight className="text-green-500" size={24} />
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="bg-green-100 p-3 rounded-full">
                      <span className="text-green-600 font-semibold text-sm">TO</span>
                    </div>
                    <span className="text-gray-900 font-semibold">{alt.to}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-green-600">
                    <Award size={16} />
                    <span className="text-sm font-medium">{alt.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Examples */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 text-center">
                <div className="text-6xl mb-4">🌱</div>
                <h3 className="font-semibold text-green-800">Biodegradable</h3>
                <p className="text-green-600 text-sm">Breaks down naturally</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 text-center">
                <div className="text-6xl mb-4">♻️</div>
                <h3 className="font-semibold text-blue-800">Recyclable</h3>
                <p className="text-blue-600 text-sm">Reusable materials</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-6 text-center">
                <div className="text-6xl mb-4">🏭</div>
                <h3 className="font-semibold text-yellow-800">Compostable</h3>
                <p className="text-yellow-600 text-sm">Industrial composting</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 text-center">
                <div className="text-6xl mb-4">🌿</div>
                <h3 className="font-semibold text-purple-800">Plant-based</h3>
                <p className="text-purple-600 text-sm">Renewable sources</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationWall;