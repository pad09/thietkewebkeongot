import "../index.css";
import { useState } from "react";

export default function Gioithieu() {

    const [show, setShow] = useState(false);

    return (
        <div className="container my-5">

            {/* ===== ABOUT ===== */}
            <div className="about-candy text-center">
                <h2
                    className="text-center mb-4"
                    style={{
                        color: "#ff8fab",
                        fontWeight: "bold"
                    }}
                >
                    Khám Phá Thế Giới Kẹo Ngọt 🍬
                </h2>


                {/* CHI TIẾT */}
                <div className={`chitiet-box ${show ? "show" : ""}`}>

                    <p>
                        Không chỉ là một viên kẹo, đó là một khoảnh khắc
                        ngọt ngào tan chảy trên đầu lưỡi.
                    </p>

                    <p>
                        Thế Giới Kẹo Ngọt mang đến hương vị tuổi thơ,
                        sự vui vẻ và những trải nghiệm đầy màu sắc.
                    </p>

                    <p>
                        Từ kẹo dẻo, socola đến các dòng kẹo hot trend,
                        tất cả đều được chọn lọc với tiêu chí ngon - đẹp - chất lượng.
                    </p>

                </div>

                {/* BUTTON */}
                <div className="text-center mt-3">

                    <button
                        className="btn btn-success btn-detail"
                        onClick={() => setShow(!show)}
                    >
                        {show ? "Ẩn chi tiết" : "Xem chi tiết"}
                    </button>

                </div>

                {/* HIGHLIGHT */}
                <div className="about-highlight mt-4">

                    <div className="highlight-box">
                        ✨ Công thức chọn lọc
                    </div>

                    <div className="highlight-box">
                        🌈 Hương vị độc đáo
                    </div>

                    <div className="highlight-box">
                        💖 Ngọt ngào mỗi ngày
                    </div>

                    <div className="highlight-box">
                        🍓 Thành phần an toàn
                    </div>

                </div>

            </div>

            {/* ===== BANNER ===== */}
            <div className="text-center my-5">

                <img
                    className="img-fluid rounded-4 shadow"
                    src="/imges/banner.jpg"
                    alt="Banner Kẹo Ngọt"
                />

            </div>

            {/* ===== ABOUT US ===== */}
            <div className="text-center mb-5">
                <h2
                    className="text-center mb-3"
                    style={{
                        color: "#ff8fab",
                        fontWeight: "bold"
                    }}
                >
                    🌟 Về Chúng Tôi
                </h2>

                <p className="text-muted">
                    KẸO NGỌT là nơi mang đến những món kẹo đáng yêu,
                    nhiều màu sắc và hương vị khiến ai cũng vui vẻ ngay từ lần đầu thưởng thức.
                </p>

                <p className="text-muted">
                    Chúng tôi luôn cập nhật các loại kẹo hot trend,
                    kẹo nhập khẩu và các sản phẩm độc lạ dành cho giới trẻ.
                </p>

            </div>

            {/* ===== VIDEO ===== */}
            <div className="text-center mb-5">

                <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/WKPAgb6HoeE?si=lRSbgdC5oqXcFfPH"
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen
                    className="rounded-4 shadow"
                ></iframe>

            </div>

            {/* ===== REVIEW ===== */}
            <div className="customer-review text-center">

<h2
                    className="text-center mb-3"
                    style={{
                        color: "#ff8fab",
                        fontWeight: "bold"
                    }}
                >
                    💬 Khách Hàng Nói Gì?
                </h2>

                <div className="review-container mt-4">

                    {/* CARD */}
                    <div className="review-card">

                        <p>
                            "Kẹo siêu ngon, vị không bị gắt và đóng gói cực kỳ dễ thương."
                        </p>

                        <div className="review-info">

                            <img src="/imges/tl.webp" alt="" />

                            <h5>
                                Nguyễn Minh Anh
                            </h5>

                        </div>

                    </div>

                    {/* CARD */}
                    <div className="review-card">

                        <p>
                            "Mình đặt thử một lần mà giờ nghiện luôn, giao hàng nhanh lắm."
                        </p>

                        <div className="review-info">

                            <img src="/imges/tl (1).webp" alt="" />

                            <h5>
                                Trần Hoàng Nam
                            </h5>

                        </div>

                    </div>

                    {/* CARD */}
                    <div className="review-card">

                        <p>
                            "Nhiều loại kẹo độc lạ, chụp hình sống ảo cực xinh."
                        </p>

                        <div className="review-info">

                            <img src="/imges/tl2.png" alt="" />

                            <h5>
                                Lê Thảo Vy
                            </h5>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}
