import React from "react";

import "../index.scss";
import { background1, background2, background3, background4 } from "../assets/index.js";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProductSection from "../components/ProductSection";
import Laptops from "../components/Laptops";
import Footer from "../components/Footer";
import Peripherals from "../components/Peripherals";

import '../styles/LandingPage.scss'
import BrandsComponent from "../components/BrandsComponent";

const LandingPage = () => {
  const date = "01.09.2020";
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
        <ProductSection />
        <Laptops image={background1} text="Custome Builds" />
        
        <Laptops image={background2} text="MSI Laptops" />
        <Laptops image={background3} text="Desktops" />
        <Laptops image={background4} text="Gaming Monitors" />
        <BrandsComponent/>
        <Peripherals date={date}/>

      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
