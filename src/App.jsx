
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Footer />
      <Routes>
        <Route path="/" />
        <Route path="/uiux" />
        <Route path="/development" />
        <Route path="/vr-dev" />
      </Routes>
    </Router>
  );
}