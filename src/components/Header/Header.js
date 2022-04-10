import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import image from "../../image/logo-1.gif";
import useFirebase from "../../Hooks/useFirebase";

const Header = () => {
  const { user, handleSignOut } = useFirebase();
  return (
    <div className="header">
      <nav>
        <div>
          <img src={image} alt="logo" />
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/register">Register</Link>
          <span>{user?.displayName && user.displayName}</span>
          {user?.uid ? (
            <button onClick={handleSignOut}>Sign Out</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
