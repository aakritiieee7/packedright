import React from 'react';
import { TrendingUp, PieChart, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Analytics: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">
          Real-time <span className="text-green-600">Impact</span> Analytics
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Charts */}
          <div className={`transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <PieChart className="text-green-600 mr-3" size={28} />
                Sustainability Metrics
              </h3>
              
              {/* Mock Chart */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Eco-Friendly (A/B)</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-3 mr-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '23%' }}></div>
                    </div>
                    <span className="font-bold">23%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium">Moderate Impact (C)</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-3 mr-3">
                      <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <span className="font-bold">45%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium">High Impact (D/F)</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-3 mr-3">
                      <div className="bg-red-500 h-3 rounded-full" style={{ width: '32%' }}></div>
                    </div>
                    <span className="font-bold">32%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-green-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 mb-1">Total Scans</p>
                    <p className="text-4xl font-bold text-gray-900">248</p>
                  </div>
                  <TrendingUp className="text-green-500" size={40} />
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 mb-1">Top Material</p>
                    <p className="text-2xl font-bold text-gray-900">Cardboard</p>
                  </div>
                  <div className="text-3xl">📦</div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-purple-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 mb-1">Active Users</p>
                    <p className="text-4xl font-bold text-gray-900">127</p>
                  </div>
                  <Users className="text-purple-500" size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;