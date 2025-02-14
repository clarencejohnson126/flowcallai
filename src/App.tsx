import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImagePage from './components/ImagePage';
import About from './components/About';
import Benefits from './components/Benefits';
import SalesAdvantages from './components/SalesAdvantages';
import Demo from './components/Demo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AI16zFramework from './components/AI16zFramework';
import RealLifeExamples from './components/RealLifeExamples';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <ImagePage />
      <About />
      <Benefits />
      <SalesAdvantages />
      <Demo />
      <RealLifeExamples />
      <AI16zFramework />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;