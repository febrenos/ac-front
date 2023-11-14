import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Access, AboutUs, Services, Product } from './pages';
import './style.css';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Access />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}
