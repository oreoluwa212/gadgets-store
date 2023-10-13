
import React from "react";



const SeriesCard = ({laptop}) => {
  return (
    <div className="product-card">
      <img src= {laptop.img} alt="product-image" />
      <div className="product-card-info">
        <p className="reviews">Reviews (4)</p>
        <h3 className="product-details">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
        </h3>
        <p className="product-price1">$499.00</p>
        <p className="product-price2">$499.00</p> 
        <p>{laptop.name}</p>      
      </div>
    </div>
  );
};

export default SeriesCard;