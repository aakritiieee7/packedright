import React from 'react';
import { Github, ExternalLink, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 via-green-900 to-green-800 text-white py-20 relative overflow-hidden">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Still wondering if your product is <span className="text-green-300">PackedRight?</span>
          </h2>
          <p className="text-2xl text-green-200 mb-12">
            Scan it. Rate it. Make it better.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-green-400 hover:bg-green-300 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Try Demo
            </button>
            <button className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Explore API
            </button>
            <button className="flex items-center border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              <Github className="mr-2" size={20} />
              GitHub
            </button>
          </div>
        </div>
        
        <div className="border-t border-green-700 pt-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-300">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white transition-colors">Our Mission</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition-colors">Impact Report</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-300">Team</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white transition-colors">Researchers</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition-colors">Developers</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition-colors">Join Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-300">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white transition-colors flex items-center"><Mail size={16} className="mr-2" />hello@packedright.com</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition-colors">Feedback</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-300">Privacy</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition-colors">Data Usage</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-green-700 text-center text-green-200">
            <p>&copy; 2025 PackedRight? - Making packaging decisions planet-smart.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;