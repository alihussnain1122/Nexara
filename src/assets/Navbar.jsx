import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <div className="text-2xl font-bold hover:text-orange-600 cursor-pointer">
          <Link to="/">Nexara Logistics</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li className="hover:text-orange-500">
            <Link to="/">HOME</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/services">SERVICES</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden bg-black text-white flex flex-col items-center py-5 space-y-4 text-lg`}
      >
        <li className="hover:text-orange-500">
          <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
        </li>
        <li className="hover:text-orange-500">
          <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
        </li>
        <li className="hover:text-orange-500">
          <Link to="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link>
        </li>
        <li className="hover:text-orange-500">
          <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
