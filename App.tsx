import React, { useEffect } from 'react';
import Hero from './components/Hero';
import UploadDemo from './components/UploadDemo';
import MaterialDetection from './components/MaterialDetection';
import Analytics from './components/Analytics';
import InspirationWall from './components/InspirationWall';
import Impact from './components/Impact';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'PackedRight? - Is your pack planet-smart?';
  }, []);

  return (
    <div className="App">
      <Hero />
      <UploadDemo />
      <MaterialDetection />
      <Analytics />
      <InspirationWall />
      <Impact />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;