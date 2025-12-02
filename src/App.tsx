import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FloatingCTA from './components/FloatingCTA/FloatingCTA';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import EyeSurgery from './pages/EyeSurgery/EyeSurgery';
import Rhinoplasty from './pages/Rhinoplasty/Rhinoplasty';
import Facelift from './pages/Facelift/Facelift';
import Pterygium from './pages/Pterygium/Pterygium';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/eye-surgery" element={<EyeSurgery />} />
            <Route path="/rhinoplasty" element={<Rhinoplasty />} />
            <Route path="/facelift" element={<Facelift />} />
            <Route path="/pterygium" element={<Pterygium />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;
