// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CICDPipeline from './components/CICDPipeline';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ci-cd" element={<CICDPipeline />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
