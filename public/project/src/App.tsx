import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Team from './components/Team';
import News from './components/News';
import Donate from './components/Donate';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SITE_CONFIG } from './data/constants';

function App() {
  useEffect(() => {
    // Update document title
    document.title = SITE_CONFIG.name;
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Team />
        <News />
        <Donate />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;