import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Stock from './components/Stock/Stock';
import Sector from './components/Sector/Sector';
import Learn from './components/Learn/Learn';
import Navbar from './components/Navbar/Navbar';
import SectorDetail from './components/SectorDetail/SectorDetail';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div style={{ marginTop: '50px' }}> {/* Add margin to avoid overlap with fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/sector" element={<Sector />} />
            <Route path="/sector/:sectorName" element={<SectorDetail />} />
            <Route path="/learn" element={<Learn />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
