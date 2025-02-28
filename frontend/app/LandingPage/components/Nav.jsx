import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            SmartLearn AI
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <NavLink
                to="/"
                className=" text-gray-600 hover:text-blue-600 font-semibold"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-gray-600 hover:text-blue-600 font-semibold"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/#"
              className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-600 hover:text-white"
            >
              Login
            </Link>
            <Link
              to="#signUp"
              className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-4 py-4 text-center">
            <li>
              <NavLink
                to="/"
                className="text-gray-600 hover:text-blue-600 font-semibold"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-gray-600 hover:text-blue-600 font-semibold"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Auth Buttons (Mobile) */}
          <div className="flex flex-col space-y-2 py-4">
            <Link
              to="/#"
              className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md font-semibold mx-6 text-center hover:bg-blue-600 hover:text-white"
            >
              Login
            </Link>
            <Link
              to="#signUp"
              className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold mx-6 text-center hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
