
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Expertise from './pages/Expertise';
import Sectors from './pages/Sectors';
import Network from './pages/Network';
import Partner from './pages/Partner';
import Imprint from './pages/Imprint';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Candidates from './pages/Candidates';
import Companies from './pages/Companies';
import Insights from './pages/Insights';

function App() {
  return (
    <Router>
      <div className="noise-overlay"></div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Main Nav Routes */}
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/network" element={<Network />} />
        <Route path="/partner" element={<Partner />} />

        {/* Dedicated Footer Nav Routes */}
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/insights" element={<Insights />} />

        {/* Legal Routes */}
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
