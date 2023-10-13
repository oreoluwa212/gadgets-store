import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

import SeriesCard from "./SeriesCard";

import { laptop1, laptop2, laptop3, laptop4, laptop5, product1, product2, product4 } from "../assets";

import '../styles/LandingPage.scss'

const Detail = () => {
  const navigate = useNavigate()
  const laptops = [
    {
      id: 1,
      img: product4,
    },
    {
      id: 2,
      img: product4,
    },
    {
      id: 3,
      img: product4,
    },
    {
      id: 4,
      img: product4,
    },
    {
      id: 5,
      img: product4,
    },
  ];

   return (
     <div className="detail-container">
       <div className="detail-left-column">
         <div className="">
           <div className="part-one">
             <h2>Filters</h2>
             <button>Clear Filter</button>
           </div>
           <div className="part-two">
             <div className="category">
               <h2>Category</h2>
               <FontAwesomeIcon icon={"angle-up"} />
             </div>
             <div className="lists">
               <h3>CUSTOM PCS</h3>
               <p>15</p>
             </div>
             <div className="lists">
               <h3>MSI ALL-IN-ONE PCS</h3>
               <p>45</p>
             </div>
             <div className="lists">
               <h3>HP/COMPAQ PCS</h3>
               <p>1</p>
             </div>
           </div>
           <div className="part-two">
             <div className="category">
               <h2>Price</h2>
               <FontAwesomeIcon icon={"angle-up"} />
             </div>
             <div className="lists">
               <h3>$0.00 - $1,000.00</h3>
               <p>19</p>
             </div>
             <div className="lists">
               <h3>$0.00 - $1,000.00</h3>
               <p>21</p>
             </div>
             <div className="lists">
               <h3>$0.00 - $1,000.00</h3>
               <p>9</p>
             </div>
             <div className="lists">
               <h3>$0.00 - $1,000.00</h3>
               <p>6</p>
             </div>
             <div className="lists">
               <h3>$0.00 - $1,000.00</h3>
               <p>3</p>
             </div>
             <div className="lists">
               <h3>$0.00 - $1,000.00</h3>
               <p>1</p>
             </div>
             <div className="lists">
               <h3>$0.00 - $1,000.00</h3>
               <p>1</p>
             </div>
             <div className="lists">
               <h3>$0.00 - $1,000.00</h3>
               <p>1</p>
             </div>
           </div>
           <div className="part-three">
             <div className="category">
               <h2>Color</h2>
               <FontAwesomeIcon icon={"angle-up"} />
             </div>
             <div className="red-black">
               <div className="black"></div>
               <div className="red"></div>
             </div>
           </div>
           <div className="part-four">
             <div className="category">
               <h2>Filter Name</h2>
               <FontAwesomeIcon icon={"angle-down"} />
             </div>
             <div className="button-div">
               <button className="button1">Apply Filters (2)</button>
             </div>
           </div>

           <div className="brand-div">
            
           </div>
         </div>
       </div>

       <div className="detail-right-column">
         <div className="products-container">
           {laptops.map((laptop) => (
             <div
               onClick={() =>
                 navigate("/desktops", {
                   state: {
                     id: laptop.id,
                     img: laptop.img,
                   },
                 })
               }
               key={laptop.id}
             >
               <SeriesCard laptop={laptop} />
             </div>
           ))}
         </div>
         <div className="products-container">
           {laptops.map((laptop) => (
             <div
               onClick={() =>
                 navigate("/desktops", {
                   state: {
                     id: laptop.id,
                     img: laptop.img,
                   },
                 })
               }
               key={laptop.id}
             >
               <SeriesCard laptop={laptop} />
             </div>
           ))}
         </div>
         <div className="products-container">
           {laptops.map((laptop) => (
             <div
               onClick={() =>
                 navigate("/desktops", {
                   state: {
                     id: laptop.id,
                     img: laptop.img,
                   },
                 })
               }
               key={laptop.id}
             >
               <SeriesCard laptop={laptop} />
             </div>
           ))}
         </div>
         <div className="products-container">
           {laptops.map((laptop) => (
             <div
               onClick={() =>
                 navigate("/desktops", {
                   state: {
                     id: laptop.id,
                     img: laptop.img,
                   },
                 })
               }
               key={laptop.id}
             >
               <SeriesCard laptop={laptop} />
             </div>
           ))}
         </div>
       </div>
     </div>
   );
}

export default Detail