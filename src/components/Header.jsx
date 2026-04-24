import { Link } from "react-router-dom";

export default function Header({ openLogin }) {
  return (
    <div>
      <div
        id="cart-popup"
        style={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
          display: "none",
          fontFamily: "'Quicksand', sans-serif",
          left: "50%",
          maxWidth: "450px",
          padding: "25px",
          position: "fixed",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          zIndex: "10001",
        }}>
        <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
          <h4 className="fw-bold text-success mb-0">GIỎ HÀNG</h4>
          <span
            className="close-cart fs-3"
            style={{
              cursor: "pointer",
            }}>
            ×
          </span>
        </div>
        <div
          style={{
            maxHeight: "250px",
            overflowY: "auto",
          }}>
          <div className="d-flex align-items-center mb-3 p-2">
            <img className="rounded me-3" src="./imges/spkd8.png" width="50" />
            <div className="flex-grow-1">
              <div className="fw-bold small">Kẹo Gấu Gummy</div>
              <div className="text-danger small">25,000đ x 1</div>
            </div>
            <button className="btn btn-sm text-muted">
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        </div>
        <div className="border-top pt-3 mt-2">
          <div className="d-flex justify-content-between fw-bold mb-3">
            <span>Tổng tiền:</span>
            <span className="text-danger">25,000đ</span>
          </div>
          <div className="row g-2">
            <div className="col-6">
              <button className="btn btn-outline-secondary w-100 rounded-pill close-cart">
                Đóng
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-success w-100 rounded-pill">
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
      <form
        action=""
        className="p-4"
        id="login"
        style={{
          display: "none",
        }}>
        <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
          <h4 className="fw-bold text-success mb-0">ĐĂNG NHẬP</h4>
          <span
            className="close fs-3"
            style={{
              cursor: "pointer",
            }}>
            x
          </span>
        </div>
        <div className="mb-3">
          <label className="fw-bold" htmlFor="user">
            Tài khoản
          </label>
          <input id="user" placeholder="Nhập tên đăng nhập..." type="text" />
        </div>
        <div className="mb-4">
          <label className="fw-bold" htmlFor="password">
            Mật khẩu
          </label>
          <input id="password" placeholder="Nhập mật khẩu..." type="password" />
        </div>
        <div className="row g-2">
          <div className="col-6">
            <button
              className="btn btn-outline-secondary w-100 rounded-pill py-2 close"
              type="button">
              Đóng
            </button>
          </div>
          <div className="col-6">
            <button
              className="btn btn-success w-100 rounded-pill py-2 fw-bold"
              type="submit">
              Đăng nhập
            </button>
          </div>
        </div>
      </form>
      <header className="container-fluid frame-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-md-4">📞 HOTLINE: 0912345678</div>
            <div className="col-md-4 d-none d-md-block" />
            <div className="col-6 col-md-4 text-end">
              <button className="btn btn-success" id="btn-login" type="button">
                Đăng Nhập
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-sm navbar-dark bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="javascript:void(0)">
                🍬 KẸO NGỌT
              </a>
              <button
                className="navbar-toggler"
                data-bs-target="#mynavbar"
                data-bs-toggle="collapse"
                type="button">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/Index">Trang Chủ</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/gioithieu">Giới Thiệu</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Tintuc">Tin Tức</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Index">Liên Hệ</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Index"></Link>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    placeholder="Tìm kẹo ngon..."
                    type="text"
                  />
                  <button className="btn btn-success" type="button">
                    Tìm
                  </button>
                </form>
                <a
                  className="ms-3 position-relative"
                  href="javascript:void(0)"
                  id="open-cart"
                  style={{
                    color: "#28a745",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}>
                  <i className="fas fa-shopping-basket fa-lg" />
                  <span className="d-none d-md-inline ms-1">Giỏ hàng</span>
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{
                      fontSize: "0.6rem",
                    }}>
                    3
                  </span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}