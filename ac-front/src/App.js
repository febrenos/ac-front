import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Access from './pages/notLogged/access';
import './index.css';
import Home from './pages/logged/home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/access" element={<Access />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}