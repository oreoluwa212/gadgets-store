import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import ListingPage from "./pages/ListingPage";
import ItemDetailPage from "./pages/ItemDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/laptops" element={<ListingPage />}></Route>
          <Route path="/desktops" element={<ListingPage />}></Route>
          <Route path="/networkingDevices" element={<ListingPage />}></Route>
          <Route path="/printersScanners" element={<ListingPage />}></Route>
          <Route path="/PCparts" element={<ListingPage />}></Route>
          <Route path="/otherProducts" element={<ListingPage />}></Route>
          <Route path="/repairs" element={<ListingPage />}></Route>
          <Route path="/detail-item" element={<ItemDetailPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
