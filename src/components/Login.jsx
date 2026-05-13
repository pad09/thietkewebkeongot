import { useState } from "react";

export default function Login({ closeLogin }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {

        if (username === "admin" && password === "123") {

            alert("Đăng nhập thành công 🍬");

            closeLogin();

        } else {

            alert("Sai tài khoản hoặc mật khẩu 😭");

        }
    };

    return (

        <div
            style={{
                position: "fixed",
                inset: "0",
                background: "rgba(0,0,0,0.3)",
                zIndex: "9999",

                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >

            <div
                className="card shadow p-4 position-relative"
                style={{
                    width: "350px",
                    borderRadius: "30px",
                    border: "3px dashed #ffd6e0",
                    background: "#fff",
                    fontFamily: "'Itim', cursive"
                }}
            >

                {/* CLOSE */}
                <button
                    type="button"
                    onClick={closeLogin}
                    style={{
                        position: "absolute",
                        top: "10px",
                        right: "15px",
                        border: "none",
                        background: "none",
                        fontSize: "25px",
                        color: "#ff8fab",
                        cursor: "pointer"
                    }}
                >
                    ×
                </button>

                {/* TITLE */}
                <h3
                    className="text-center mb-4 fw-bold"
                    style={{
                        color: "#ff4d8d"
                    }}
                >
                     Đăng nhập
                </h3>

                {/* USERNAME */}
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Tên đăng nhập"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{
                        borderRadius: "15px",
                        padding: "10px",
                        border: "2px solid #ffe5ec"
                    }}
                />

                {/* PASSWORD */}
                <input
                    type="password"
                    className="form-control mb-4"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        borderRadius: "15px",
                        padding: "10px",
                        border: "2px solid #e0f7ff"
                    }}
                />

                {/* BUTTON */}
                <button
                    type="button"
                    className="btn w-100"
                    onClick={handleLogin}
                    style={{
                        background:
                            "linear-gradient(to right,#ff8fab,#ffb3c6)",
                        color: "white",
                        borderRadius: "50px",
                        padding: "10px",
                        fontWeight: "bold",
                        border: "none"
                    }}
                >
                    Đăng nhập 🍬
                </button>

            </div>

        </div>
    );
}