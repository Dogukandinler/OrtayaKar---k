import React, { useState } from "react";
import "./Navbar1.css";
import { useNavigate } from "react-router-dom";
import {
  FaTimes,
  FaBars,
  FaHome,
  FaBackward,
  FaUser,
} from "react-icons/fa";

const Navbar1 = (index) => {
  const [isMobile, setisMobile] = useState(false);

  const navigate = useNavigate();

  //?----------------------useNavigate Links------------------*/

  const Menu = () => {
    navigate("/menu");
  };

  const Login = () => {
    navigate("/signin");
  };

  const Logo = () => {
    navigate("/home");
  };

  const Home = () => {
    navigate("/home");
  };

  const Profile = () => {
    navigate("/profile");
  };

  return (
    <nav className="navbar">
      <div>
       <li className="nav-link" onClick={Home}>
          <FaBackward className="fa-house" />
          Geri
        </li>
      </div>

      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li className="nav-link" onClick={Home}>
          <FaHome className="fa-house" />
          Home
        </li>

        <li className="nav-link" onClick={Profile}>
          <FaUser className="fa-house" />
          Profilim
        </li>
      </ul>

      <button className="nav-mobile-menu-icons">
        {isMobile ? (
          <FaTimes className="fa-times" onClick={() => setisMobile(false)} />
        ) : (
          <FaBars className="fa-bars" onClick={() => setisMobile(true)} />
        )}
      </button>
    </nav>
  );
};

export default Navbar1;