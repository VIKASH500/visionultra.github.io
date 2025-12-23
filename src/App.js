import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Technology from './pages/Technology';
import Impact from './pages/Impact';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Pricing from './pages/Pricing';
import ProtectedRoute from './components/ProtectedRoute';
import Demo from './pages/Demo';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Analytics from './components/Analytics';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <HashRouter>
      <Analytics />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<ProtectedRoute><Pricing /></ProtectedRoute>} />
          <Route
            path="/demo"
            element={isAuthenticated ? <Demo onLogout={handleLogout} /> : <Navigate to="/login" />}
          />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;

