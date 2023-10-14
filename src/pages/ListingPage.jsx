import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductSection from '../components/ProductSection'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import '../styles/ListingPage.scss'
import Detail from '../components/Detail'


const ListingPage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
        <div className="list-heading">
          <div className="listings">
            <p>Home</p> <FontAwesomeIcon icon={"angle-right"} />
            <p>Laptop</p>
            <FontAwesomeIcon icon={"angle-right"} />
            <p>Everyday Use Notebooks</p>
            <FontAwesomeIcon icon={"angle-right"} />
            <p>MSI Prestige Series</p>
          </div>
          <div className="ps-series">
            <h1>MSI PS Series (20)</h1>
          </div>
          <div className="back-div"></div>
        </div>
        <Detail />
      </div>
      <Footer />
    </>
  );
}

export default ListingPage