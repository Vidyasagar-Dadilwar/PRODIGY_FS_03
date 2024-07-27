import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          E-Commerce
        </Link>
        <nav>
          <Link to="/cart" className="mr-4">
            Cart
          </Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;