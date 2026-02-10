
import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Services from './components/sections/Services';
import QuoteSection from './components/sections/Quote';
import Footer from './components/layout/Footer';
// import lucide from 'lucide'; // Removed unused import

function App() {

  // Noise overlay is handled in global CSS, but we can verify it renders here if needed.
  // The structure matches existing body content from HTML.

  return (
    <>
      <div className="noise-overlay"></div>

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Services />
        <QuoteSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
