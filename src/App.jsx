import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection  />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
