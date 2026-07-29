
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/hlogo 1.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <NavLink to="/">
            <img src={logo} alt="HaidyElkenawy" />
        </NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/uiux" className={({ isActive }) => (isActive ? 'active' : '')}>
            UI/UX
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
            Development
          </NavLink>
        </li>
        <li>
          <NavLink to="/vr-dev" className={({ isActive }) => (isActive ? 'active' : '')}>
            VR Dev
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}