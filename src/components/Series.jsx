import React from 'react'
import SeriesCard from './SeriesCard';
import { laptop1, laptop2, laptop3, laptop4, laptop5 } from "../assets";

const laptops = [
    {
      id: 1,
      img: laptop1,
    },
    {
      id: 2,
      img: laptop2,
    },
    {
      id: 3,
      img: laptop3,
    },
    {
      id: 4,
      img: laptop4,
    },
    {
      id: 5,
      img: laptop5,
    },    
  ];

const Series = () => {
  return (
    <div className="products-container">
        {laptops.map(laptop => 
        <SeriesCard key={laptop.id} laptop={laptop} />          
        )}        
    </div>
  )
}

export default Series