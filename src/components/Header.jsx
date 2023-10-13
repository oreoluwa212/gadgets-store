import React from "react";
import { HeroImg, heroImg2 } from "../assets";
import { useLocation } from "react-router-dom";


const Header = () => {
  const location = useLocation()
  return (
    <div className="header">
      <div className="hero-div">
        <img
          src={location.pathname === "/laptops" ? heroImg2 : HeroImg}
          className={
            location.pathname === "/laptops" ? "laptopHero" : "heroImg"
          }
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default Header;
