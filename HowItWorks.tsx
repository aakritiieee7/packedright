import React from 'react';
import { Camera, Search, BarChart, Lightbulb } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HowItWorks: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const steps = [
    {
      icon: <Camera size={40} />,
      title: 'Upload a Photo',
      description: 'Take or upload a clear photo of your product packaging',
      color: 'bg-blue-500'
    },
    {
      icon: <Search size={40} />,
      title: 'AI Material Detection',
      description: 'Our AI analyzes and identifies packaging materials instantly',
      color: 'bg-purple-500'
    },
    {
      icon: <BarChart size={40} />,
      title: 'Get Eco-Impact Score',
      description: 'Receive a comprehensive sustainability rating A-F',
      color: 'bg-orange-500'
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Read AI Summary',
      description: 'Get personalized recommendations for better alternatives',
      color: 'bg-green-500'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">
          How <span className="text-green-600">PackedRight?</span> Works
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-1 h-96 bg-green-300"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <div className={`${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} text-center md:text-left`}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.color} text-white mb-6`}>
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <div className={`${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className="text-6xl text-center mb-4">
                        {index === 0 && '📱'}
                        {index === 1 && '🔍'}
                        {index === 2 && '📊'}
                        {index === 3 && '💡'}
                      </div>
                      <div className="text-center text-gray-500">
                        Step {index + 1}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;