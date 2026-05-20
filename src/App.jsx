import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Index from "./components/Main";
import Footer from "./components/Footer";
import ShowProduct from "./components/ShowProduct";
import Login from "./components/Login";
import Gioithieu from "./pages/Gioithieu";
import Tintuc from "./components/Tintuc";
import Lienhe from "./pages/Lienhe";
import Detail from "./pages/Detail";
import SanPham from "./pages/SanPham";
import KhachHang from "./components/KhachHang";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      <Header openLogin={() => setShowLogin(true)} />

      {/* CHỖ THAY ĐỔI Ở ĐÂY NÈ: Đổi closeLogin thành onClose */}
      {showLogin && (
        <Login onClose={() => setShowLogin(false)} />
      )}

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/gioithieu" element={<Gioithieu />} />
        <Route path="/sanpham" element={<SanPham />} />
        <Route path="/Tintuc" element={<Tintuc />} /> 
        <Route path="/lienhe" element={<Lienhe />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/khachhang" element={<KhachHang />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>

      <Footer />
    </Router>
  );
}