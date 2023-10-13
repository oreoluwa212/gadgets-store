import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo, profileImg } from "../assets/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const location = useLocation();
  const links = [
    {
      id: 1,
      name: "Laptops",
      path: "/laptops",
    },
    {
      id: 2,
      name: "Desktop PCs",
      path: "/desktops",
    },
    {
      id: 3,
      name: "Networking Devices",
      path: "/networkingDevices",
    },
    {
      id: 4,
      name: "Printers & Scanners",
      path: "/printersScanners",
    },
    {
      id: 5,
      name: "PC Parts",
      path: "/PCparts",
    },
    {
      id: 6,
      name: "All Other Products",
      path: "/otherProducts",
    },
    {
      id: 7,
      name: "Repairs",
      path: "/repairs",
    },
  ];

  return (
    <div className="main-content">
      <div className="navbar">
        <div className="logo">
          <Link to={"/"}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
            >
              {link.name}
            </Link>
          ))}
          <button className="btn">Our Deals</button>
        </div>
        <div className="right">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faShoppingCart} />
          <img src={profileImg} alt="Profile Image" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
