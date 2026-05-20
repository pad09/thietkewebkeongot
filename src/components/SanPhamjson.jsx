import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SanPham() {
    const [sanpham, setSanPham] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://firestore.googleapis.com/v1/projects/keongot-a7179/databases/(default)/documents/product"
      )
      .then((res) => {
        const documents = res.data.documents || [];

        const data = documents.map((doc) => ({
          id:
            Number(doc.fields?.id?.integerValue) ||
            doc.name.split("/").pop(),
          tensp: doc.fields?.tensp?.stringValue || "",
          hinh: doc.fields?.hinh?.stringValue || "",
          gia: Number(doc.fields?.gia?.integerValue || 0)
        }));

        setSanPham(data);
      })
      .catch((err) => {
        console.log("Lỗi API:", err);
        setSanPham([]);
      });
  }, []);

  const filteredProducts = sanpham.filter((sp) =>
    sp.tensp.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h2
        className="text-center mb-4"
        style={{ color: "#ff8fab", fontWeight: "bold" }}
      >
        🍬 TẤT CẢ SẢN PHẨM
      </h2>

      {/* Ô tìm kiếm */}
      <div className="row mb-5 justify-content-center">
        <div className="col-md-6">
          <div
            style={{
              background: "#fff0f6",
              padding: "10px 15px",
              borderRadius: "999px",
              boxShadow: "0 8px 20px rgba(255, 143, 171, 0.2)",
              border: "2px solid #ffd6e0"
            }}
          >
            <input
              type="text"
              className="form-control border-0 shadow-none"
              placeholder="🍭 Tìm kiếm kẹo ngọt yêu thích..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                background: "transparent",
                borderRadius: "999px",
                color: "#ff4d6d",
                fontWeight: "500",
                padding: "10px 20px",
                fontSize: "16px"
              }}
            />
          </div>
        </div>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="row g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((sp) => (
            <div className="col-md-3" key={sp.id}>
              <div
                className="card h-100"
                style={{
                  border: "none",
                  borderRadius: "25px",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(255, 143, 171, 0.15)",
                  transition: "0.3s",
                  background: "#fff"
                }}
              >
                <img
                  className="card-img-top"
                  src={sp.hinh}
                  alt={sp.tensp}
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    padding: "10px"
                  }}
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
                    style={{
                      background: "#ff8fab",
                      border: "none",
                      borderRadius: "50px",
                      fontWeight: "bold",
                      padding: "10px 20px"
                    }}
                  >
                    🛒 Mua Ngay
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-center text-muted">
              Không tìm thấy sản phẩm nào khớp với từ khóa "{searchTerm}"!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
