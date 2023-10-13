
import React from "react";
import '../styles/LandingPage.scss'


const DetailsNavbar = () => {
  return (
    <div className="main-content">
      <div className="navbar">        
          <ul className="nav-links">
            <li>About Product</li>
            <li>Details</li>
            <li>Specs</li>
          </ul>                  
        <div className="right">
          <p>On Sale from $3,299.00</p>
          <button className="button1">Add to Cart</button>
          <button className="button2">PayPal</button>          
        </div>
      </div>
    </div>
  )
}

export default DetailsNavbar