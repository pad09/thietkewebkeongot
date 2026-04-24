export default function SPKM() {

    const sp = [
        { id: 1, ten: "KẸO DẺO", mota: "mô tả 0123456", gia: "35.000đ", hinh: "spkd8.png" },
        { id: 2, ten: "KẸO CHUA", mota: "mô tả 0123456", gia: "35.000đ", hinh: "spkd8.png" },
        { id: 3, ten: "KẸO MỀM", mota: "mô tả 0123456", gia: "35.000đ", hinh: "spkd8.png" },
        { id: 4, ten: "KẸO NGẬM", mota: "mô tả 0123456", gia: "35.000đ", hinh: "spkd8.png" },
    ];

    return (
        <div>
            <h3 className="my-3 border-bottom text-center">SẢN PHẨM KHUYẾN MÃI</h3>

            <div className="row">
                {sp.map((item) => (
                    <div className="col-md-3" key={item.id}>
                        <div className="card">
                            <img className="card-img-top" src={`/imges/${item.hinh}`} />
                            <div className="card-body">
                                <h4 className="card-title">{item.ten}</h4>
                                <p className="card-text">{item.gia}</p>
                                <a href="#" className="btn btn-success">Mua ngay</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h3 className="my-3 border-bottom text-center">SẢN PHẨM MỚI</h3>

            <div className="row">
                {sp.map((item) => (
                    <div className="col-md-3" key={item.id}>
                        <div className="card">
                            <img className="card-img-top" src={`/imges/${item.hinh}`} />
                            <div className="card-body">
                                <h4 className="card-title">{item.ten}</h4>
                                <p className="card-text">{item.gia}</p>
                                <a href="#" className="btn btn-success">Mua ngay</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}