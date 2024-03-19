import { useState } from "react";
import logo from "../assets/img/TestyGoodFood.png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={logo} alt="TestyGoodFood Logo" />
    </a>
  );
};

const Header = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/about" className="link">About</Link></li>
          <li><Link to="/contact" className="link">Contact</Link></li>
          <li>Cart</li>
          <Link to="/login">
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
