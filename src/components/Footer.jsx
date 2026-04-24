export default function Footer() {
  return (
    <footer className="footer">

      <div className="container py-5">

        <div className="row g-4">

          {/* LEFT */}
          <div className="col-md-4">
            <h3 className="footer-title">🍬 KẸO NGỌT</h3>

            <p className="footer-text">
              Ngọt xỉu luôn 😭💖 ăn là ghiền
            </p>

            <div className="footer-contact">
              <p>📍 TP.HCM</p>
              <p>📞 0123 456 789</p>
              <p>📧 candyvibes@gmail.com</p>
            </div>

            <div className="social">
              <span>📘 Facebook</span>
              <span>📸 Instagram</span>
              <span>🎵 TikTok</span>
            </div>
          </div>

          {/* CENTER */}
          <div className="col-md-4">
            <h5 className="footer-title-sm">🚚 Chính sách</h5>
            <p>✔ Giao hàng nhanh 2h</p>
            <p>✔ Đổi trả miễn phí</p>
            <p>✔ Cam kết chính hãng</p>

            <h5 className="footer-title-sm mt-3">⏰ Giờ mở cửa</h5>
            <p>8h - 22h mỗi ngày</p>
          </div>

          {/* RIGHT MAP */}
          <div className="col-md-4">

            <div className="map-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.8777786312644!2d106.63146967591705!3d10.743901989402929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e794ceeb2e7%3A0x60feca181d4f1dd3!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEtpbmggdOG6vyBL4bu5IHRodeG6rXQgVHAuSENNIC0gdHJ1b25ndmlldG5hbS5jb20!5e0!3m2!1sen!2s!4v1776400424418!5m2!1sen!2s"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* SUBSCRIBE */}
            <div className="subscribe-box mt-3">
              <h5>📩 Nhận khuyến mãi</h5>
              <input type="email" placeholder="Nhập email..." />
              <button>Đăng ký</button>
            </div>

          </div>

        </div>

        <hr />

        <p className="footer-bottom">
          Made with 💖 | © 2026 Thế Giới Kẹo Ngọt - Ăn là nghiện 😭🍬
        </p>

      </div>

    </footer>
  );
}