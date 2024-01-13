import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hunting from './pages/hunting';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import About from './pages/about/about';
import './App.css';

function App() {
  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hunting" element={<Hunting/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
