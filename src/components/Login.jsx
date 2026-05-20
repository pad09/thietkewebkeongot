import axios from "axios";
import { useEffect, useState } from "react";

export default function Login({ onClose }) { // Chỉ cần nhận onClose thôi vì App đã quản lý việc hiện/ẩn rồi
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://firestore.googleapis.com/v1/projects/keongot-a7179/databases/(default)/documents/users")
      .then((res) => {
        const rawData = res.data.documents || [];
        const formattedUsers = rawData.map((doc) => {
          const fields = doc.fields || {};
          return {
            username: fields.username?.stringValue || "",
            password: fields.password?.stringValue || "",
            hoten: fields.hoten?.stringValue || "Khách hàng",
          };
        });
        setListUsers(formattedUsers);
      })
      .catch((err) => console.error("Lỗi lấy dữ liệu user:", err));
  }, []);

  const handleLogin = () => {
    if (!username || !password) {
      alert("Vui lòng nhập đầy đủ tài khoản và mật khẩu!");
      return;
    }

    const checkUser = listUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (checkUser) {
      alert(`Đăng nhập thành công! Chào ${checkUser.hoten}`);
      onClose(); 
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    /* LỚP NỀN MỜ PHỦ TOÀN MÀN HÌNH - ĐẨY Z-INDEX LÊN CAO NHẤT */
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", /* Làm tối nền phía sau */
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999999, /* Số siêu lớn để không bị thằng nào đè lên */
      }}
      onClick={onClose} /* Bấm ra vùng ngoài màu đen cũng tự tắt form */
    >
      {/* KHUNG FORM ĐĂNG NHẬP CHÍNH */}
      <form
        className="p-4 shadow"
        style={{
          backgroundColor: "#fffdfd", 
          borderRadius: "15px", 
          width: "340px", 
          position: "relative",
          border: "none"
        }}
        onSubmit={(e) => e.preventDefault()} 
        onClick={(e) => e.stopPropagation()} /* Ngăn không cho form bị tắt khi click vào bên trong ô input */
      >
        {/* Nút đóng góc phải */}
        <button
          type="button"
          style={{
            position: "absolute", top: "10px", right: "15px", fontSize: "24px",
            border: "none", background: "none", cursor: "pointer", color: "#ff8da1"
          }}
          onClick={onClose}
        >
          ×
        </button>

        {/* Tiêu đề */}
        <h3 className="text-center mb-4" style={{ color: "#ff8da1", fontWeight: "bold" }}>
          ĐĂNG NHẬP
        </h3>

        <div className="mb-3">
          <label className="form-label small fw-bold text-secondary">Tài khoản</label>
          <input
            type="text"
            className="form-control border-0 p-2"
            style={{ backgroundColor: "#fff0f2", borderRadius: "10px" }} 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nhập tên tài khoản..."
          />
        </div>

        <div className="mb-4">
          <label className="form-label small fw-bold text-secondary">Mật khẩu</label>
          <input
            type="password"
            className="form-control border-0 p-2"
            style={{ backgroundColor: "#fff0f2", borderRadius: "10px" }} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu..."
          />
        </div>

        {/* Nút bấm */}
        <div className="text-center">
          <button
            type="button"
            className="btn w-100 fw-bold text-white p-2 border-0"
            style={{ 
              backgroundColor: "#ff8da1", 
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(255, 141, 161, 0.2)"
            }} 
            onClick={handleLogin} 
          >
            Đăng Nhập
          </button>
        </div>
      </form>
    </div>
  );
}