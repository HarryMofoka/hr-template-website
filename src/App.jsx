
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Expertise from './pages/Expertise';
import Sectors from './pages/Sectors';
import Network from './pages/Network';
import Partner from './pages/Partner';
import Legal from './pages/Legal';

function App() {
  return (
    <Router>
      <div className="noise-overlay"></div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/network" element={<Network />} />
        <Route path="/partner" element={<Partner />} />

        {/* Legal Routes */}
        <Route path="/imprint" element={<Legal title="Imprint" />} />
        <Route path="/privacy" element={<Legal title="Privacy Policy" />} />
        <Route path="/terms" element={<Legal title="Terms & Conditions" />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
