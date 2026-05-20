import axios from "axios";
import { useEffect, useState } from "react";

export default function KhachHang() {
  const [listUsers, setListUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://firestore.googleapis.com/v1/projects/keongot-a7179/databases/(default)/documents/users")
      .then((res) => {
        const rawData = res.data.documents || [];
        const formattedUsers = rawData.map((doc) => ({
          username: doc.fields.username.stringValue,
          password: doc.fields.password.stringValue,
          hoten: doc.fields.hoten.stringValue,
          avatar: doc.fields.avatar.stringValue,
          // Sửa thành sdth ở đây nè Nhung
          sdth: doc.fields.sdth ? doc.fields.sdth.stringValue : "Chưa có",
          diachi: doc.fields.diachi ? doc.fields.diachi.stringValue : "Chưa có",
          email: doc.fields.email ? doc.fields.email.stringValue : "Chưa có",
        }));
        setListUsers(formattedUsers);
      })
      .catch((err) => console.error("Lỗi lấy user:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-5">Đang tải danh sách khách hàng...</p>;

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4" style={{ color: "#ff8da1", fontWeight: "bold" }}>
        QUẢN LÝ DANH SÁCH KHÁCH HÀNG
      </h3>
      <div className="row g-4">
        {listUsers.length > 0 ? (
          listUsers.map((user, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="card h-100 shadow-sm border-0 p-3" style={{ backgroundColor: "#fff5f5", borderRadius: "15px" }}>

                <div className="d-flex align-items-center gap-3 mb-3">
                  <img
                    src={user.avatar}
                    alt={user.hoten}
                    className="rounded-circle shadow-sm"
                    style={{ width: "70px", height: "70px", objectFit: "cover", border: "2px solid #ff8da1" }}
                  />
                  <div>
                    <h5 className="mb-1 fw-bold text-dark">{user.hoten}</h5>
                    <p className="mb-0 text-muted small">@{user.username} | Pass: <code>{user.password}</code></p>
                  </div>
                </div>

                <hr style={{ borderTop: "1px dashed #ff8da1", margin: "5px 0 10px 0" }} />

                <div className="small text-secondary">
                  {/* Hiển thị ra màn hình */}
                  <p className="mb-1">📞 <strong>Số điện thoại:</strong> {user.sdth}</p>
                  <p className="mb-1">📧 <strong>Email:</strong> {user.email}</p>
                  <p className="mb-0">📍 <strong>Địa chỉ:</strong> {user.diachi}</p>
                </div>

              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-100">Chưa có khách hàng nào trên Firebase!</p>
        )}
      </div>
    </div>
  );
}