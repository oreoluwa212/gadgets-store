import React from "react";
import Series from "./Series";




const Laptops = ({ image, text }) => {
  return (
    <div className="section products">
      <div className="products-container">
        <div className="container1">
          <img className="background1" src={image} alt="background1" />
          <div className="text">
            <p className="text1">{text}</p>
            <a className="text-link" href="#">
              See All Products
            </a>
          </div>
        </div>
        <Series />
      </div>
    </div>
  );
};

export default Laptops;
