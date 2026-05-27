import { useEffect, useState } from "react";

export default function GioHang() {
    const [cart, setCart] = useState([]);

    // LOAD CART
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    // XÓA
    const deleteProduct = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    // TĂNG
    const increase = (id) => {
        const newCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    // GIẢM
    const decrease = (id) => {
        const newCart = cart
            .map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    // TỔNG TIỀN
    const total = cart.reduce((sum, item) => sum + item.gia * item.quantity, 0);

    return (
        <div className="container my-5">
            <div
                style={{
                    background: "#fff6f6", // Nền hồng siêu nhạt cực soft
                    borderRadius: "30px",  // Bo tròn góc hộp lớn
                    padding: "30px",
                    boxShadow: "0 15px 35px rgba(255, 182, 193, 0.2)"
                }}
            >
                <h2
                    style={{
                        color: "#ff758f", // Màu hồng dâu ngọt ngào
                        fontWeight: "800",
                        textAlign: "center",
                        marginBottom: "30px",
                        letterSpacing: "1px"
                    }}
                >
                    🍭 GIỎ HÀNG KẸO NGỌT
                </h2>

                {/* Bỏ viền mặc định của Bootstrap, dùng border-collapse riêng lẻ để bo góc tr/td */}
                <table 
                    className="table align-middle text-center" 
                    style={{ 
                        borderCollapse: "separate", 
                        borderSpacing: "0 10px",
                        background: "transparent"
                    }}
                >
                    <thead>
                        <tr
                            style={{
                                background: "#ffb7b2", // Màu hồng cam pastel cho tiêu đề
                                color: "white"
                            }}
                        >
                            <th style={{ padding: "15px", borderRadius: "15px 0 0 15px", border: "none" }}>STT</th>
                            <th style={{ border: "none" }}>TÊN</th>
                            <th style={{ border: "none" }}>HÌNH</th>
                            <th style={{ border: "none" }}>GIÁ</th>
                            <th style={{ border: "none" }}>SỐ LƯỢNG</th>
                            <th style={{ border: "none" }}>THÀNH TIỀN</th>
                            <th style={{ padding: "15px", borderRadius: "0 15px 15px 0", border: "none" }}>XÓA</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cart.map((item, index) => (
                            <tr 
                                key={item.id}
                                style={{
                                    background: "white",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.02)"
                                }}
                            >
                                <td style={{ padding: "20px", borderRadius: "15px 0 0 15px", border: "none", color: "#888" }}>
                                    {index + 1}
                                </td>

                                <td style={{ border: "none", color: "#555", fontWeight: "600" }}>
                                    {item.tensp}
                                </td>

                                <td style={{ border: "none" }}>
                                    <img
                                        src={`/imges/${item.hinh}`}
                                        alt=""
                                        style={{
                                            width: "85px",
                                            height: "85px",
                                            objectFit: "cover",
                                            borderRadius: "18px", // Bo tròn hình ảnh
                                            border: "3px solid #ffcad4" // Viền hồng pastel nhẹ quanh ảnh
                                        }}
                                    />
                                </td>

                                {/* Màu Xanh Mint pastel cho Giá tiền */}
                                <td style={{ border: "none", color: "#2ec4b6", fontWeight: "bold" }}>
                                    {item.gia.toLocaleString()}đ
                                </td>

                                <td style={{ border: "none" }}>
                                    {/* Nút giảm màu Xanh Mint nhạt */}
                                    <button
                                        className="btn btn-sm"
                                        style={{
                                            background: "#cbf3f0",
                                            color: "#0f4c5c",
                                            borderRadius: "10px",
                                            fontWeight: "bold",
                                            border: "none",
                                            width: "32px",
                                            height: "32px"
                                        }}
                                        onClick={() => decrease(item.id)}
                                    >
                                        -
                                    </button>

                                    <span className="mx-3 fw-bold" style={{ color: "#ff758f", fontSize: "16px" }}>
                                        {item.quantity}
                                    </span>

                                    {/* Nút tăng màu Hồng pastel nhạt */}
                                    <button
                                        className="btn btn-sm"
                                        style={{
                                            background: "#ffccd5",
                                            color: "#c9184a",
                                            borderRadius: "10px",
                                            fontWeight: "bold",
                                            border: "none",
                                            width: "32px",
                                            height: "32px"
                                        }}
                                        onClick={() => increase(item.id)}
                                    >
                                        +
                                    </button>
                                </td>

                                {/* Thành tiền nổi bật với tone Hồng đậm sữa */}
                                <td style={{ border: "none", color: "#ff4d6d", fontWeight: "bold" }}>
                                    {(item.gia * item.quantity).toLocaleString()}đ
                                </td>

                                <td style={{ borderRadius: "0 15px 15px 0", border: "none" }}>
                                    <button
                                        className="btn"
                                        style={{
                                            background: "#ffe5ec",
                                            color: "#ff4d6d",
                                            borderRadius: "12px",
                                            border: "none",
                                            padding: "8px 12px"
                                        }}
                                        onClick={() => deleteProduct(item.id)}
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                    <tfoot>
                        <tr style={{ background: "transparent" }}>
                            <td 
                                colSpan="5" 
                                style={{ 
                                    border: "none", 
                                    fontWeight: "bold", 
                                    color: "#ff758f", 
                                    textAlign: "right",
                                    paddingRight: "20px"
                                }}
                            >
                                💖 TỔNG THANH TOÁN:
                            </td>

                            <td
                                style={{
                                    border: "none",
                                    color: "#ff1744",
                                    fontSize: "22px",
                                    fontWeight: "bold"
                                }}
                            >
                                {total.toLocaleString()}đ
                            </td>

                            <td style={{ border: "none" }}>
                                {/* Nút thanh toán chuyển sang màu Xanh Mint phối chữ trắng cực xinh */}
                                <button
                                    className="btn text-white fw-bold"
                                    style={{
                                        background: "#2ec4b6",
                                        borderRadius: "15px",
                                        padding: "10px 20px",
                                        boxShadow: "0 5px 15px rgba(46, 196, 182, 0.3)",
                                        border: "none"
                                    }}
                                    onClick={() => {
                                        alert("🎉 Thanh toán thành công!");
                                        localStorage.removeItem("cart");
                                        setCart([]);
                                    }}
                                >
                                    🛍️ Thanh Toán
                                </button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}