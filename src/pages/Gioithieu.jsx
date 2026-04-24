import "../index.css";
import { useState } from "react";

export default function Gioithieu() {
    const [show, setShow] = useState(false);

    return (
        <div className="container my-5">

            {/* ===== ABOUT ===== */}
            <div className="about-candy text-center">

                <h2>Khám Phá Thế Giới Kẹo Ngọt 🍬</h2>

                {/* CHI TIẾT (HIỆU ỨNG) */}
                <div className={`chitiet-box ${show ? "show" : ""}`}>
                    <p>
                        Không chỉ là một viên kẹo, đó là một khoảnh khắc ngọt ngào tan chảy
                        trên đầu lưỡi.
                    </p>
                    <p>
                        Thế Giới Kẹo Ngọt mang đến hương vị tuổi thơ và niềm vui mỗi ngày.
                    </p>
                </div>

                {/* BUTTON GIỮA */}
                <div className="text-center mt-3">
                    <button
                        className="btn btn-success btn-detail"
                        onClick={() => setShow(!show)}
                    >
                        {show ? "Ẩn chi tiết" : "Chi tiết"}
                    </button>
                </div>

                {/* HIGHLIGHT */}
                <div className="about-highlight mt-4">
                    <div className="highlight-box">✨ Công thức chọn lọc</div>
                    <div className="highlight-box">🌈 Hương vị độc đáo</div>
                    <div className="highlight-box">💖 Ngọt ngào</div>
                </div>

            </div>

            {/* ===== BANNER ===== */}
            <div className="text-center my-5">
                <img className="img-fluid rounded-4 shadow" src="/imges/banner.jpg" alt="" />
            </div>

            {/* ===== REVIEW ===== */}
            <div className="customer-review text-center">

                <h2>💬 Khách Hàng Nói Gì?</h2>

                <div className="review-container mt-4">

                    <div className="review-card">
                        <p>Kẹo rất ngon và mềm.</p>
                        <div className="review-info">
                            <img src="/imges/tl.webp" alt="" />
                            <h5>Nguyễn Minh Anh</h5>
                        </div>
                    </div>

                    <div className="review-card">
                        <p>Đóng gói đẹp, giao nhanh.</p>
                        <div className="review-info">
                            <img src="/imges/tl1.webp" alt="" />
                            <h5>Trần Hoàng Nam</h5>
                        </div>
                    </div>

                    <div className="review-card">
                        <p>Giá hợp lý, đáng thử.</p>
                        <div className="review-info">
                            <img src="/imges/tl2.png" alt="" />
                            <h5>Lê Thảo Vy</h5>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}