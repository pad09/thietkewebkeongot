import { Link } from "react-router-dom";
import sanpham from "../data/product";


export default function ShowSPKM() {
  const km = sanpham.filter(sp => sp.mota === "spkm");

  return (
    <div className="container">
      <div className="row">
        <h2>Sản phẩm khuyến mãi</h2>
        {km.map(sp => (
          <div className="col-md-3" key={sp.id}>
            <div className="card">
              <img className="card-img-top" src={`./imges/${sp.hinh}`} alt={sp.tensp} />
              <div className="card-body">
                <h4 className="card-title">{sp.tensp}</h4>
                <p className="card-text">{sp.gia}đ</p>
                <Link to={`/detail/${sp.id}`} className="btn btn-success">Mua Ngay</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ShowSPBC() {
  const bc = sanpham.filter(sp => sp.mota === "spbc");

  return (
    <div className="container">
      <div className="row">
        <h2>Sản phẩm bán chạy</h2>
        {bc.map(sp => (
          <div className="col-md-3" key={sp.id}>
            <div className="card">
              <img className="card-img-top" src={`./imges/${sp.hinh}`} alt={sp.tensp} />
              <div className="card-body">
                <h4 className="card-title">{sp.tensp}</h4>
                <p className="card-text">{sp.gia}đ</p>
                <Link to={`/detail/${sp.id}`} className="btn btn-success">Mua Ngay</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ShowSPH() {
  const hot = sanpham.filter(sp => sp.mota === "sphot");

  return (
    <div className="container">
      <div className="row">
        <h2>Sản phẩm Hot</h2>
        {hot.map(sp => (
          <div className="col-md-3" key={sp.id}>
            <div className="card">
              <img className="card-img-top" src={`./imges/${sp.hinh}`} alt={sp.tensp} />
              <div className="card-body">
                <h4 className="card-title">{sp.tensp}</h4>
                <p className="card-text">{sp.gia}đ</p>
                <Link to={`/detail/${sp.id}`} className="btn btn-success">Mua Ngay</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}