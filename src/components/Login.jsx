import { useState } from "react";

export default function Login({ closeLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "123") {
      alert("Đăng nhập thành công");
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "80px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000
      }}
    >
      <div className="card shadow p-4 position-relative" style={{ width: "350px" }}>
        
        <button
          onClick={closeLogin}
          style={{
            position: "absolute",
            top: "5px",
            right: "10px",
            border: "none",
            background: "none",
            fontSize: "20px"
          }}
        >
          ×
        </button>

        <h3 className="text-center mb-3">Đăng nhập</h3>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-success w-100" onClick={handleLogin}>
          Đăng nhập
        </button>
      </div>
    </div>
  );
}