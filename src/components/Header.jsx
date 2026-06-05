import { Link } from "react-router-dom";

export default function Header({ openLogin }) {
  return (
    <div>
      { }
      <header className="container-fluid frame-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-md-4">
              📞 HOTLINE: 0123 456 789
            </div>

            <div
              className="col-md-4 d-none d-md-block text-center"
              style={{ fontSize: "1.1rem" }}
            >
              🍬 Thế Giới Kẹo Ngọt 🍬
            </div>

            <div className="col-6 col-md-4 text-end">
              { }
              <button
                type="button"
                className="btn"
                onClick={openLogin}
                style={{
                  background: "linear-gradient(to right,#ff8fab,#ffb3c6)",
                  color: "#fff",
                  borderRadius: "50px",
                  padding: "8px 22px",
                  fontWeight: "bold",
                  border: "none",
                  boxShadow: "0 5px 15px rgba(255,143,171,0.3)",
                  transition: "0.3s"
                }}
              >
                <i className="fa-solid fa-user me-2"></i>
                Đăng Nhập
              </button>
            </div>
          </div>
        </div>
      </header>


      <div className="container">
        <nav
          className="navbar navbar-expand-sm mt-3 px-3"
          style={{
            background: "#fff",
            borderRadius: "0 0 30px 30px",
            boxShadow: "0 5px 20px rgba(162,210,255,0.15)"
          }}
        >
          <div className="container-fluid">
            <Link
              className="navbar-brand fw-bold"
              to="/"
              style={{
                color: "#ff8fab",
                fontSize: "1.8rem",
                textDecoration: "none"
              }}
            >
              🍭 KẸO NGỌT
            </Link>

            <button
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
              type="button"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Trang Chủ</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gioithieu">Giới Thiệu</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sanpham">Sản Phẩm</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tintuc">Tin Tức</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/lienhe">Liên Hệ</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/khachhang">Khách Hàng</Link>
                </li>
              </ul>


              <form className="d-flex">
                <input
                  className="form-control me-2 rounded-pill border-info"
                  placeholder="Tìm kẹo ngon..."
                  type="text"
                />
                <button
                  type="button"
                  className="btn rounded-pill"
                  style={{ background: "#ff8fab", color: "white" }}
                >
                  Tìm
                </button>
              </form>


              <Link
                to="/giohang"
                className="btn ms-3 d-flex align-items-center"
                style={{
                  color: "#ff8fab",
                  border: "none",
                  textDecoration: "none"
                }}
              >
                <i className="fa-solid fa-cart-shopping fa-lg"></i>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}