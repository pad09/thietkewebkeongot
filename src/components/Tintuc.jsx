import "../App.css";

const newsData = [
    {
        id: 1,
        type: "XU HƯỚNG",
        title: "Kẹo ít đường trở thành lựa chọn hàng đầu",
        desc: "Xu hướng ăn uống lành mạnh khiến các loại kẹo ít đường, kẹo hữu cơ ngày càng được ưa chuộng. Người tiêu dùng không chỉ quan tâm đến vị ngon mà còn chú trọng sức khỏe.",
        img: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?q=80&w=600",
        reverse: false
    },
    {
        id: 2,
        type: "SỨC KHỎE",
        title: "Ăn kẹo đúng cách bảo vệ răng",
        desc: "Làm sao để con vừa tận hưởng vị ngọt mà không lo sâu răng? Cùng khám phá bí quyết ăn kẹo hợp lý giúp bảo vệ sức khỏe răng miệng.",
        img: "https://images.unsplash.com/photo-1525059337994-6f2a1311b4d4?q=80&w=600",
        reverse: true
    },
    {
        id: 3,
        type: "LỐI SỐNG",
        title: "Thị trường kẹo Việt bùng nổ sáng tạo",
        desc: "Nhiều thương hiệu trong nước không ngừng đổi mới từ hương vị đến bao bì. Các sản phẩm kẹo bắt trend đang thu hút đông đảo giới trẻ.",
        img: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?q=80&w=600",
        reverse: false
    },
    {
        id: 4,
        type: "TIÊU DÙNG",
        title: "Kẹo độc lạ “gây sốt” mạng xã hội",
        desc: "Những loại kẹo đổi màu, phát sáng hay có hình dáng độc đáo đang trở thành trào lưu mới được giới trẻ yêu thích.",
        img: "https://images.unsplash.com/photo-1525059337994-6f2a1311b4d4?q=80&w=600",
        reverse: true
    }
];

export default function Tintuc() {
    return (
        <div className="container my-5">
            <div className="row mt-5">

                {/* ===== LEFT NEWS ===== */}
                <div className="col-md-8">

                    <h3 className="section-title mb-4">
                        TIN MỚI CẬP NHẬT
                    </h3>

                    {newsData.map(item => (
                        <div
                            key={item.id}
                            className="card news-card shadow-sm mb-4"
                        >
                            <div className={`row g-0 ${item.reverse ? "flex-row-reverse" : ""}`}>

                                <div className="col-md-5">
                                    <img
                                        src={item.img}
                                        className="img-fluid h-100"
                                        style={{ objectFit: "cover" }}
                                        alt=""
                                    />
                                </div>

                                <div className="col-md-7">
                                    <div className={`card-body p-4 ${item.reverse ? "text-md-end" : ""}`}>

                                        <span className="badge-custom">
                                            {item.type}
                                        </span>

                                        <h4 className="fw-bold mt-2">
                                            {item.title}
                                        </h4>

                                        <p className="text-muted">
                                            {item.desc}
                                        </p>

                                        <button className="btn btn-outline-info btn-sm rounded-pill">
                                            Đọc tiếp
                                        </button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}

                    {/* PAGINATION */}
                    <nav className="mt-4">
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    Trước
                                </a>
                            </li>

                            <li className="page-item active">
                                <a className="page-link" href="#">
                                    1
                                </a>
                            </li>

                            <li className="page-item">
                                <a className="page-link" href="#">
                                    2
                                </a>
                            </li>

                            <li className="page-item">
                                <a className="page-link" href="#">
                                    Sau
                                </a>
                            </li>
                        </ul>
                    </nav>

                </div>

                {/* ===== RIGHT SIDEBAR ===== */}
                <div className="col-md-4">

                    {/* CATEGORY */}
                    <div className="frame-danhmuc">

                        <h3>DANH MỤC TIN</h3>

                        <ul>
                            <li>
                                <i className="fas fa-cookie me-2"></i>
                                Kiến thức về kẹo
                            </li>

                            <li>
                                <i className="fas fa-star me-2"></i>
                                Review sản phẩm
                            </li>

                            <li>
                                <i className="fas fa-tags me-2"></i>
                                Khuyến mãi hot
                            </li>

                            <li>
                                <i className="fas fa-heart me-2"></i>
                                Góc sức khỏe
                            </li>
                        </ul>
                    </div>

                    {/* POPULAR */}
                    <div className="frame-danhmuc">

                        <h3>TIN XEM NHIỀU</h3>

                        <div className="d-flex align-items-center mb-3">
                            <img
                                src="https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=100"
                                className="me-3 rounded shadow-sm"
                                style={{
                                    width: 60,
                                    height: 60,
                                    objectFit: "cover"
                                }}
                                alt=""
                            />

                            <a
                                href="#"
                                className="text-decoration-none text-dark small fw-bold"
                            >
                                Bí mật màu sắc kẹo cầu vồng
                            </a>
                        </div>

                        <div className="d-flex align-items-center mb-3">
                            <img
                                src="https://images.unsplash.com/photo-1499195333224-3ce974eecfb4?q=80&w=100"
                                className="me-3 rounded shadow-sm"
                                style={{
                                    width: 60,
                                    height: 60,
                                    objectFit: "cover"
                                }}
                                alt=""
                            />

                            <a
                                href="#"
                                className="text-decoration-none text-dark small fw-bold"
                            >
                                Cách bảo quản socola chuẩn
                            </a>
                        </div>

                    </div>

                    {/* PROMO */}
                    <div className="frame-danhmuc text-center">

                        <h3 className="text-danger">
                            KHUYẾN MÃI HOT
                        </h3>

                        <div className="p-3 bg-light rounded-3 border border-danger">

                            <p className="fw-bold text-danger mb-0">
                                MUA 2 TẶNG 1!
                            </p>

                            <p className="small text-muted">
                                Áp dụng duy nhất hôm nay
                            </p>

                            <button className="btn btn-candy btn-sm w-100">
                                NHẬN NGAY
                            </button>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}