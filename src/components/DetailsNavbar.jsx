
import React from "react";
import '../styles/LandingPage.scss'
import paypal from '../assets/img/paypal.svg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const DetailsNavbar = () => {
  return (
    <div className="main-content1">
      <div className="navbar">
        <ul className="nav-links">
          <li>About Product</li>
          <li>Details</li>
          <li>Specs</li>
        </ul>
      </div>
      <div className="right">
        <p>On Sale from $3,299.00</p>
        <div className="one">
          <p>1</p>
          <div className="up-down">
            <FontAwesomeIcon icon={faAngleUp} />
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
        <button className="button1">Add to Cart</button>
        <button className="button2">
          <img src={paypal} alt="" />
        </button>
      </div>
    </div>
  );
}

export default DetailsNavbar