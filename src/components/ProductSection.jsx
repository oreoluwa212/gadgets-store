import React from "react";

import ReusableCard from "./ReusableCard";

const ProductSection = () => {
    
  return (
    <div className="section products">
      <div className="products-heading">
        <h1>New Products</h1>
        <a href="#">See All New Products</a>
      </div>
      <ReusableCard />
    </div>
  );
};

export default ProductSection;
