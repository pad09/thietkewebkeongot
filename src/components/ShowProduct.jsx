import { Link } from "react-router-dom";
import sanpham from "../data/product";

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

export default function ShowSPKM() {
  const km = sanpham.filter((sp) => sp.mota === "spkm");

  return (
    <div className="container my-5">
      <h2
        className="text-center mb-4"
        style={{
          color: "#ff8fab",
          fontWeight: "bold"
        }}
      >
        🎁 SẢN PHẨM KHUYẾN MÃI
      </h2>

      <div className="row g-4">
        {km.map((sp) => (
          <div className="col-md-3" key={sp.id}>
            <div className="card h-100" style={cardStyle}>
              <img
                className="card-img-top"
                src={`./imges/${sp.hinh}`}
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
                  {sp.gia}đ
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

export function ShowSPBC() {
  const bc = sanpham.filter((sp) => sp.mota === "spbc");

  return (
    <div className="container my-5">
      <h2
        className="text-center mb-4"
        style={{
          color: "#ff8fab",
          fontWeight: "bold"
        }}
      >
        🌟 SẢN PHẨM BÁN CHẠY
      </h2>

      <div className="row g-4">
        {bc.map((sp) => (
          <div className="col-md-3" key={sp.id}>
            <div className="card h-100" style={cardStyle}>
              <img
                className="card-img-top"
                src={`./imges/${sp.hinh}`}
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
                  {sp.gia}đ
                </p>

                <Link
                  to={`/detail/${sp.id}`}
                  className="btn text-white"
                  style={btnStyle}
                >
                  🍬 Mua Ngay
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ShowSPH() {
  const hot = sanpham.filter((sp) => sp.mota === "sphot");

  return (
    <div className="container my-5">
      <h2
        className="text-center mb-4"
        style={{
          color: "#ff8fab",
          fontWeight: "bold"
        }}
      >
        🔥 SẢN PHẨM HOT
      </h2>

      <div className="row g-4">
        {hot.map((sp) => (
          <div className="col-md-3" key={sp.id}>
            <div className="card h-100" style={cardStyle}>
              <img
                className="card-img-top"
                src={`./imges/${sp.hinh}`}
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
                  {sp.gia}đ
                </p>

                <Link
                  to={`/detail/${sp.id}`}
                  className="btn text-white"
                  style={btnStyle}
                >
                  💖 Mua Ngay
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}