import { useState } from "react";
import logo from "../assets/img/TestyGoodFood.png";
import { Link } from "react-router-dom";

// Title component for displaying logo
const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={logo} alt="TestyGoodFood Logo" />
    </a>
  );
};

// Header component for navigation and login/logout functionality
const Header = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false); // State for tracking login status

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/about" className="link">About</Link></li>
          <li><Link to="/contact" className="link">Contact</Link></li>
          <li><Link to="/help" className="link">Help</Link></li>
          <li>Cart</li>
          <Link to="/login">
            {/* Conditional rendering of login/logout button based on login status */}
            {isloggedIn == false ? (
              <button
                className="login"
                onClick={() => {
                  setIsLoggedIn(true);
                }}
              >
                Login
              </button>
            ) : (
              <button
                className="logout"
                onClick={() => {
                  setIsLoggedIn(false);
                }}
              >
                Logout
              </button>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
