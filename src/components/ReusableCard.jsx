
import React from "react";
import ProductCard from "./ProductCard";
import { product1, product2, product3, product4, product5, product6 } from "../assets";

const products = [
    {
      id: 1,
      img: product1,
    },
    {
      id: 2,
      img: product2,
    },
    {
      id: 3,
      img: product3,
    },
    {
      id: 4,
      img: product4,
    },
    {
      id: 5,
      img: product5,
    },
    {
      id: 6,
      img: product6,
    },
  ];

const ReusableCard = () => {
    return (
      <div className="products-container">
          {products.map(product => 
            <ProductCard key={product.id} product={product} />          
          )}
      </div>
    )
  }
  
  export default ReusableCard;