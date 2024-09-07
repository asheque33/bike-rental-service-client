import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-x-4">
      <div>
        <Link to={"/"}>
          <strong>Bike Rental</strong>
        </Link>
      </div>
      <ul className=" font-semibold">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-400" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-400" : "")}
            to="/about-us"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-400" : "")}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
      <div>
        <Link className="px-5 py-3 bg-blue-400 rounded-lg" to={"/login"}>
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
