import React, { useState } from "react";
import peripherals from "../utils/data.js";

const Peripherals = (blog) => {
  const date = blog.title;

  return (
    <>
      <div className="peripherals-container">
        <h2>Follow us on Instagram for News, Offers & More</h2>
        <ul>
          {Object.keys(peripherals).map((key) => (
            <li key={key}>
              <img src={peripherals[key].image} alt={key} />
              <p>{peripherals[key].text}</p>
              <h3>{blog.date}</h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Peripherals;
