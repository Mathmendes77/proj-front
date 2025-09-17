import { Link } from "react-router-dom";
import "./nav.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-logo">CATEDRAL</span>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/login">login</Link>
        <Link to="/cadastro">cadastro</Link>
        
      </div>
    </nav>
  );
}