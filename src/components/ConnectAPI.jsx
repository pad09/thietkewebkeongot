import axios from "axios";
import { useEffect, useState } from "react";

export default function ConnectAPI() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:3000/sanpham")
            .then((res) => {
                setProducts(res.data || []);
            })
            .catch((err) => {
                console.error("Lỗi:", err);
                setError(err);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading)
        return <p className="text-center mt-5">Đang tải...</p>;

    if (error)
        return (
            <p className="text-center text-danger mt-5">
                Lỗi khi tải dữ liệu
            </p>
        );

    return (
        <div className="container my-5">
            <h2
                className="text-center mb-5"
                style={{
                    color: "#ff8fab",
                    fontWeight: "bold"
                }}
            >
                🍬 DANH SÁCH SẢN PHẨM
            </h2>

            <div className="row g-4">
                {products.length > 0 ? (
                    products.map((item) => (
                        <div
                            className="col-12 col-sm-6 col-md-3"
                            key={item.id}
                        >
                            <div
                                className="card h-100 shadow-sm border-0"
                                style={{
                                    borderRadius: "25px",
                                    overflow: "hidden"
                                }}
                            >
                                <img
                                    src={`/imges/${item.hinh}`}
                                    alt={item.tensp}
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
                                        {item.tensp}
                                    </h5>

                                    <p
                                        className="fw-bold"
                                        style={{
                                            color: "#28a745",
                                            fontSize: "18px"
                                        }}
                                    >
                                        {item.gia.toLocaleString()}đ
                                    </p>

                                    <button
                                        className="btn text-white"
                                        style={{
                                            background: "#ff8fab",
                                            border: "none",
                                            borderRadius: "50px",
                                            padding: "10px 20px",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        🛒 Mua Ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">
                        Không tìm thấy sản phẩm nào!
                    </p>
                )}
            </div>
        </div>
    );
}