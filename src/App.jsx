import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Index from "./components/Main";
import Footer from "./components/Footer";
import ShowProduct from "./components/ShowProduct";
import Login from "./components/Login";
import Gioithieu from "./pages/Gioithieu";
import Tintuc from "./components/Tintuc";
import Detail from "./pages/Detail";




export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      <Header openLogin={() => setShowLogin(true)} />

      {showLogin && (
        <Login closeLogin={() => setShowLogin(false)} />
      )}

      <Routes>
        <Route path="*" element={<Index />} />
       
        <Route path="/index" element={<Index />} />
        <Route path="/gioithieu" element={<Gioithieu />} />
        <Route path="/lienhe" element={<h1>Contact</h1>} />
        <Route path="/sanpham" element={<ShowProduct />} />
         <Route path="/Tintuc" element={<Tintuc />} /> 
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>

      <Footer />
    </Router>
  );
}