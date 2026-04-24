import React from 'react';

export default function Banner() {
    return (
        <div className="container mt-4">
           <div className="row g-4 align-items-stretch">
                
                {/* CỘT DANH MỤC (Bên trái) */}
                <div className="col-md-3">
                    <div className="frame-danhmuc">
                        <h3 className="text-light">DANH MỤC</h3>
                        <ul className="list-menu">
                            <li>
                                <strong>Kẹo Cứng</strong>
                                {/* <ul>
                                    <li>Kẹo Ngậm</li>
                                    <li>Kẹo Bạc Hà</li>
                                    <li>Kẹo Trái Cây</li>
                                </ul> */}
                            </li>
                              <li className="mt-3 ps-3"><strong>Kẹo Socol</strong></li>
                            <li className="mt-3 ps-3"><strong>Kẹo Socol</strong></li>
                            <li className="mt-2 ps-3"><strong>Thạch Trái Cây</strong></li>
                        </ul>
                    </div>
                </div>

                {/* CỘT BANNER (Bên phải) */}
                <div className="col-md-9">
                    <div id="candyCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#candyCarousel" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#candyCarousel" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#candyCarousel" data-bs-slide-to="2"></button>
                        </div>
                        
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./imges/banner.jpg" className="d-block w-100 img-banner" alt="Khuyến mãi 1" />
                            </div>
                            <div className="carousel-item">
                                <img src="./imges/banner.jpg" className="d-block w-100 img-banner" alt="Khuyến mãi 2" />
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#candyCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#candyCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}