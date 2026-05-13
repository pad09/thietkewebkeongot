import React, { useState } from 'react';

export default function LienHe() {
    const [formData, setFormData] = useState({
        ten: '',
        lienHe: '',
        chuDe: '',
        tinNhan: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Gửi thành công! Tụi mình sẽ check sớm nha. 🍬");
    };

    return (
        <div className="contact-page" style={{ 
            backgroundColor: '#fff', 
            paddingTop: '100px', 
            paddingBottom: '80px',
            minHeight: '100vh'
        }}>
            
            {/* PHẦN TIÊU ĐỀ CÓ NỀN HỒNG (GIỐNG BẢN ĐẦU) */}
            <div className="container mb-5">
                <div style={{
                    background: 'linear-gradient(135deg, #fff5f7 0%, #ffeef2 100%)', // Nền hồng loang nhẹ nhàng
                    padding: '60px 20px',
                    borderRadius: '30px',
                    textAlign: 'center',
                    border: '1px solid #ffdae0'
                }}>
                    <h2 style={{ fontWeight: '800', color: '#ff4d6d', fontSize: '2.5rem' }}>
                        LIÊN HỆ VỚI TỤI MÌNH 💌
                    </h2>
                    <p style={{ color: '#ff8095', fontSize: '1.2rem', fontWeight: '500' }}>
                        Hỏi gì cũng được, miễn là ngọt ngào! ✨
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="row g-5">
                    {/* BÊN TRÁI: THÔNG TIN CÓ ICON DỄ THƯƠNG */}
                    <div className="col-md-5">
                        <div style={{ padding: '20px' }}>
                            <h3 className="fw-bold mb-4" style={{ color: '#ff4d6d' }}>💕 KẸO NGỌT</h3>
                            <p className="text-muted mb-5">Bạn muốn đặt kẹo, cần hỗ trợ hay đơn giản là muốn tâm sự? Nhắn ngay cho tụi mình nhé!</p>
                            
                            <div className="info-list">
                                <div className="mb-4 d-flex align-items-center">
                                    <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>📍</span>
                                    <span style={{ color: '#555' }}>123 Đường Sắc Màu, Quận 10, TP.HCM</span>
                                </div>
                                <div className="mb-4 d-flex align-items-center">
                                    <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>📞</span>
                                    <span style={{ color: '#555' }}>0912 345 678</span>
                                </div>
                                <div className="mb-4 d-flex align-items-center">
                                    <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>📧</span>
                                    <span style={{ color: '#555' }}>keongot@gmail.com</span>
                                </div>
                            </div>

                            <div className="mt-5 pt-4 border-top d-flex gap-4">
                                <span style={{ color: '#1877f2', cursor: 'pointer', fontWeight: 'bold' }}>Facebook</span>
                                <span style={{ color: '#e1306c', cursor: 'pointer', fontWeight: 'bold' }}>Instagram</span>
                                <span style={{ color: '#000', cursor: 'pointer', fontWeight: 'bold' }}>TikTok</span>
                            </div>
                        </div>
                    </div>

                    {/* BÊN PHẢI: FORM TRẮNG NỔI BẬT */}
                    <div className="col-md-7">
                        <div style={{ 
                            background: '#fff', 
                            padding: '40px', 
                            borderRadius: '30px', 
                            boxShadow: '0 15px 40px rgba(255, 182, 193, 0.2)', // Bóng đổ màu hồng nhẹ
                            border: '1px solid #fdf0f2'
                        }}>
                            <h4 className="mb-4 fw-bold" style={{ color: '#ff4d6d' }}>Gửi lời nhắn nhủ ✨</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <label className="small fw-bold mb-2 text-muted">Tên của bạn</label>
                                        <input name="ten" type="text" className="form-control" placeholder="Bé Kẹo tên là..." 
                                            style={inputStyle} onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small fw-bold mb-2 text-muted">Email / Số điện thoại</label>
                                        <input name="lienHe" type="text" className="form-control" placeholder="Để tụi mình phản hồi..." 
                                            style={inputStyle} onChange={handleChange} required />
                                    </div>
                                    <div className="col-12">
                                        <label className="small fw-bold mb-2 text-muted">Bạn đang nghĩ gì thế?</label>
                                        <textarea name="tinNhan" className="form-control" rows="5" placeholder="Nhập nội dung ngọt ngào tại đây..." 
                                            style={inputStyle} onChange={handleChange} required></textarea>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <button type="submit" className="btn w-100 py-3" style={{ 
                                            background: 'linear-gradient(45deg, #ff6b81, #ffafbd)',
                                            color: '#fff', 
                                            borderRadius: '15px', 
                                            fontWeight: '700',
                                            fontSize: '1.1rem',
                                            border: 'none',
                                            boxShadow: '0 8px 20px rgba(255, 107, 129, 0.3)',
                                            transition: '0.3s'
                                        }}>
                                            Gửi ngay đi luôn! 🚀🍬
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const inputStyle = {
    borderRadius: '15px',
    padding: '12px 15px',
    border: '2px solid #fff5f7',
    backgroundColor: '#fffcfd',
    outline: 'none'
};