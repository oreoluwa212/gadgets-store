import React from "react";
import './ProductSection.jsx'



const ProductCard = ({product}) => {
  return (
    <div className="product-card">
      <img src= {product.img} alt="product-image" />
      <div className="product-card-info">
        <p className="reviews">Reviews (4)</p>
        <h3 className="product-details">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
        </h3>
        <p className="product-price1">$499.00</p>
        <p className="product-price2">$499.00</p>       
      </div>
    </div>
  );
};

export default ProductCard;
