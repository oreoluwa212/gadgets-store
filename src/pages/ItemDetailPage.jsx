import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import '../styles/ItemDetail.scss'
import ItemDetail from "../components/ItemDetail";
import { useLocation } from "react-router-dom";

const ItemDetailPage = () => {
  const location = useLocation()
  const state = location?.state
  return (
    <>
      <Navbar />
      <div className="container">
         <div className="items-detail-container">
            <ItemDetail state={state} />
         </div>
      </div>
      <Footer />
    </>
  );
};

export default ItemDetailPage;
