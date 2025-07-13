import React, { useEffect, useState } from 'react';
import { Users, MapPin, Scale } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Impact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [counters, setCounters] = useState({ plastic: 0, scans: 0, campuses: 0 });

  useEffect(() => {
    if (isVisible) {
      const targets = { plastic: 2.1, scans: 500, campuses: 7 };
      const duration = 2000;
      const steps = 60;
      const increment = {
        plastic: targets.plastic / steps,
        scans: targets.scans / steps,
        campuses: targets.campuses / steps
      };

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setCounters({
          plastic: Math.min(increment.plastic * currentStep, targets.plastic),
          scans: Math.min(Math.floor(increment.scans * currentStep), targets.scans),
          campuses: Math.min(Math.floor(increment.campuses * currentStep), targets.campuses)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl">🌱</div>
        <div className="absolute top-20 right-20 text-6xl">♻️</div>
        <div className="absolute bottom-20 left-20 text-7xl">🌍</div>
        <div className="absolute bottom-10 right-10 text-5xl">📱</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16">
          Our <span className="text-green-300">Impact</span> So Far
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className="bg-green-700 rounded-2xl p-8 shadow-2xl">
              <Scale className="mx-auto mb-4 text-green-300" size={48} />
              <div className="text-4xl font-bold mb-2">
                {counters.plastic.toFixed(1)} kg
              </div>
              <p className="text-green-200 text-lg">Plastic waste reduced</p>
            </div>
          </div>
          
          <div className={`text-center transition-all duration-1000 delay-200 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className="bg-green-700 rounded-2xl p-8 shadow-2xl">
              <Users className="mx-auto mb-4 text-green-300" size={48} />
              <div className="text-4xl font-bold mb-2">
                {counters.scans}+
              </div>
              <p className="text-green-200 text-lg">Scans this week</p>
            </div>
          </div>
          
          <div className={`text-center transition-all duration-1000 delay-400 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className="bg-green-700 rounded-2xl p-8 shadow-2xl">
              <MapPin className="mx-auto mb-4 text-green-300" size={48} />
              <div className="text-4xl font-bold mb-2">
                {counters.campuses}+
              </div>
              <p className="text-green-200 text-lg">Universities using PackedRight?</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            Join thousands of conscious consumers making smarter packaging choices every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;