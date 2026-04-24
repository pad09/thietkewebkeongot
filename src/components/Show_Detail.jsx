import { useParams, Link } from "react-router-dom";
import { useLayoutEffect } from "react";
import { useState } from "react";
import sanpham from "../data/product";

export default function Detail() {
    const { id } = useParams();
    const product = sanpham.find(sp => sp.id === Number(id));

    const [qty, setQty] = useState(1);

    useLayoutEffect (() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return <h2 className="text-center mt-5">❌ Không tìm thấy sản phẩm</h2>;
    }

    const images = [
        `/imges/${product.hinh}`,
        `/imges/${product.hinh}`,
        `/imges/${product.hinh}`,
    ];

    const [mainImg, setMainImg] = useState(images[0]);

    // 🛍️ cùng danh mục
    const same = sanpham.filter(
        sp => sp.danhmuc === product.danhmuc && sp.id !== product.id
    );

    // 🔥 random khác danh mục
    const random = [...sanpham]
        .filter(sp => sp.danhmuc !== product.danhmuc)
        .sort(() => Math.random() - 0.5);

    // 🛒 add cart
    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const index = cart.findIndex(item => item.id === product.id);

        if (index !== -1) {
            cart[index].qty += qty;
        } else {
            cart.push({ ...product, qty });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("🛒 Đã thêm vào giỏ hàng!");
    };

    // 🎨 badge màu theo loại kẹo
    const getBadgeClass = (type) => {
        switch (type) {
            case "kẹo dẻo":
                return "bg-warning text-dark";
            case "kẹo socola":
                return "bg-dark text-white";
            case "kẹo trái cây":
                return "bg-success text-white";
            default:
                return "bg-secondary text-white";
        }
    };

    return (
        <div className="container my-5">

            {/* ===== DETAIL ===== */}
            <div className="row g-4">

                {/* IMAGE */}
                <div className="col-md-7">
                    <div className="img-box">
                        <img src={mainImg} alt="" className="main-img" />
                    </div>

                    <div className="d-flex gap-2 mt-3">
                        {images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt=""
                                className={`thumb ${mainImg === img ? "active-thumb" : ""}`}
                                onClick={() => setMainImg(img)}
                            />
                        ))}
                    </div>
                </div>

                {/* INFO */}
                <div className="col-md-5 info-box">

                    {/* 🏷️ TAG LOẠI KẸO */}
                    <span className={`badge mb-2 ${getBadgeClass(product.danhmuc)}`}>
                        {product.danhmuc}
                    </span>

                    <h2 className="fw-bold">{product.tensp}</h2>

                    <p className="rating">⭐⭐⭐⭐⭐ (120 đánh giá)</p>

                    <h1 className="price">
                        {Number(product.gia).toLocaleString()}đ
                    </h1>

                    <p className="desc">{product.mota}</p>

                    {/* QUANTITY */}
                    <div className="d-flex align-items-center my-3">
                        <button
                            className="qty-btn"
                            onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                        >-</button>

                        <input value={qty} readOnly className="qty-input" />

                        <button
                            className="qty-btn"
                            onClick={() => setQty(qty + 1)}
                        >+</button>
                    </div>

                    {/* BUTTON */}
                    <div className="d-flex gap-3">
                        <button className="btn buy-btn" onClick={addToCart}>
                            🛒 Thêm vào giỏ
                        </button>

                        <button className="btn fav-btn">
                            ❤️ Yêu thích
                        </button>
                    </div>

                    <div className="extra mt-4">
                        <p>🚚 Giao nhanh 2h</p>
                        <p>💯 Chính hãng</p>
                        <p>🔁 Đổi trả miễn phí</p>
                    </div>
                </div>
            </div>

            {/* ===== DESCRIPTION ===== */}
            <div className="mt-5 detail-box p-4 rounded-4 shadow-sm bg-white">
                <h4 className="mb-3">📄 Mô tả chi tiết</h4>

                <p>
                    <b>{product.tensp}</b> – món ăn vặt “đỉnh của chóp” cho team mê đồ ngọt 🍬💖
                    Vị ngọt nhẹ, không gắt, kết hợp độ dẻo mềm hoàn hảo → ăn là ghiền ngay từ lần đầu 😋
                </p>

                <ul style={{ lineHeight: "1.8" }}>
                    <li>✨ <b>Hương vị:</b> Ngọt dịu, thơm nhẹ, không ngán</li>
                    <li>🍬 <b>Kết cấu:</b> Dẻo mềm, nhai cực đã</li>
                    <li>🛡️ <b>Chất lượng:</b> Nguyên liệu chọn lọc, an toàn</li>
                    <li>🎒 <b>Tiện lợi:</b> Nhỏ gọn, mang đi học/đi chơi đều ok</li>
                </ul>

                <p>
                    💬 Ăn khi học bài 📚, xem phim 🎬 hay tám chuyện với bạn bè đều “hợp vibe” hết!
                    Chỉ cần một miếng là mood lên liền 💫
                </p>

                <div className="p-3 mt-3 rounded-3" style={{ background: "#fff0f6" }}>
                    👉 <b>Kết luận:</b> Ngon – tiện – dễ ghiền 😝
                    <br />
                    ⚠️ Cảnh báo nhẹ: Có thể ăn là mê luôn đó nha!
                </div>
            </div>

            {/* ===== SAME CATEGORY ===== */}
            <div className="mt-5">
                <h4 className="mb-4">
                    🛍️ Cùng loại: {product.danhmuc}
                </h4>

                <div className="row g-4">
                    {same.slice(0, 4).map(sp => (
                        <div className="col-lg-3 col-md-3 col-6" key={sp.id}>
                            <div className="card product-card h-100">

                                <img
                                    src={`/imges/${sp.hinh}`}
                                    className="card-img-top"
                                    alt=""
                                />

                                <div className="card-body text-center">

                                    <span className={`badge mb-2 ${getBadgeClass(sp.danhmuc)}`}>
                                        {sp.danhmuc}
                                    </span>

                                    <h6 className="fw-bold">{sp.tensp}</h6>

                                    <p className="text-danger">
                                        {Number(sp.gia).toLocaleString()}đ
                                    </p>

                                    <Link
                                        to={`/detail/${sp.id}`}
                                        className="btn btn-sm btn-success"
                                    >
                                        Xem
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===== RANDOM SUGGEST ===== */}
            <div className="mt-5">
                <h4 className="mb-4">🔥 Gợi ý cho bạn</h4>

                <div className="row g-4">
                    {random.slice(0, 4).map(sp => (
                        <div className="col-lg-3 col-md-3 col-6" key={sp.id}>
                            <div className="card product-card h-100">

                                <img
                                    src={`/imges/${sp.hinh}`}
                                    className="card-img-top"
                                    alt=""
                                />

                                <div className="card-body text-center">

                                    <span className={`badge mb-2 ${getBadgeClass(sp.danhmuc)}`}>
                                        {sp.danhmuc}
                                    </span>

                                    <h6 className="fw-bold">{sp.tensp}</h6>

                                    <p className="text-danger">
                                        {Number(sp.gia).toLocaleString()}đ
                                    </p>

                                    <Link
                                        to={`/detail/${sp.id}`}
                                        className="btn btn-sm btn-success"
                                    >
                                        Xem
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}