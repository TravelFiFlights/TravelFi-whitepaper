import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Community from './components/Community';
import TokenStats from './components/TokenStats';
import Whitepaper from './components/Whitepaper';
import Footer from './components/Footer';
import ThreeScene from './components/ThreeScene';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

function MainContent() {
  return (
    <>
      <ThreeScene />
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <TokenStats />
      </div>
      <Whitepaper />
      <Tokenomics />
      <Roadmap />
      <Community />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;