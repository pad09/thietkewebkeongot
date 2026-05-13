import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const cardStyle = {
  border: "none",
  borderRadius: "25px",
  overflow: "hidden",
  boxShadow: "0 10px 25px rgba(255, 143, 171, 0.15)",
  transition: "0.3s",
  background: "#fff"
};

const imgStyle = {
  height: "220px",
  objectFit: "cover",
  padding: "10px"
};

const btnStyle = {
  background: "#ff8fab",
  border: "none",
  borderRadius: "50px",
  fontWeight: "bold",
  padding: "10px 20px"
};

export default function SanPhamjson() {

  const [sanpham, setSanPham] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/sanpham")
      .then((res) => {
        setSanPham(res.data);
      })
      .catch((err) => {
        console.log("Lỗi API:", err);
      });
  }, []);

  return (
    <div className="container my-5">
      <h2
        className="text-center mb-5"
        style={{
          color: "#ff8fab",
          fontWeight: "bold"
        }}
      >
        🍬 TẤT CẢ SẢN PHẨM
      </h2>

      <div className="row g-4">
        {sanpham.map((sp) => (
          <div className="col-md-3" key={sp.id}>
            <div className="card h-100" style={cardStyle}>

              <img
                className="card-img-top"
                src={`/imges/${sp.hinh}`}
                alt={sp.tensp}
                style={imgStyle}
              />

              <div className="card-body text-center">
                <h5
                  className="card-title"
                  style={{
                    color: "#ff4d6d",
                    fontWeight: "bold"
                  }}
                >
                  {sp.tensp}
                </h5>

                <p
                  className="card-text"
                  style={{
                    color: "#28a745",
                    fontWeight: "bold",
                    fontSize: "18px"
                  }}
                >
                  {sp.gia.toLocaleString()}đ
                </p>

                <Link
                  to={`/detail/${sp.id}`}
                  className="btn text-white"
                  style={btnStyle}
                >
                  🛒 Mua Ngay
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}