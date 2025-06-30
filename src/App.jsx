import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Signin from './pages/signin'
import Dashboard from './pages/dashboard';
import './App.css'; // global styles, optional

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="global-overlay"></div>
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
