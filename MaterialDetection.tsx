import React from 'react';
import { AlertTriangle, Leaf, BarChart3 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MaterialDetection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const cards = [
    {
      title: 'Material Detected',
      content: 'Plastic (PET)',
      icon: <AlertTriangle className="text-orange-500" size={32} />,
      delay: 0
    },
    {
      title: 'Eco Impact Score',
      content: 'Score: D',
      badge: 'High Impact',
      icon: <BarChart3 className="text-red-500" size={32} />,
      delay: 200
    },
    {
      title: 'AI Summary',
      content: 'This PET plastic bottle has moderate recyclability but significant carbon footprint. Consider glass or aluminum alternatives.',
      icon: <Leaf className="text-green-500" size={32} />,
      delay: 400
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="text-green-400">Instant</span> Material Analysis
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-2xl p-8 shadow-2xl transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${card.delay}ms` }}
            >
              <div className="flex items-center mb-6">
                {card.icon}
                <h3 className="text-xl font-semibold ml-4">{card.title}</h3>
              </div>
              
              <div className="text-3xl font-bold mb-4 text-green-300">
                {card.content}
              </div>
              
              {card.badge && (
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {card.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialDetection;