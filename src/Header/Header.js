import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };
 
  return (
    <header className="header">
      <div className="brand">SYNTAX ERROR</div>
      <nav className="navigation">
        <ul className="links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/contactus'>Contact Us</Link>
          </li>
        </ul>
        <div className="buttons">
          <button className="button login-button header-button" onClick={handleLogin}>
            Log In
          </button>
          <button className="button signin-button header-button" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
