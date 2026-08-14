// src/App.jsx (Updated)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// IMPORT the new page
import UIUX from './pages/UIUX';
import Development from './pages/Software';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* ADD the route for the UI/UX page */}
        <Route path="/uiux" element={<UIUX />} />
        <Route path="/development" element={<Development />} />
        <Route path="/vr-dev" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}