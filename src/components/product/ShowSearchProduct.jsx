import listProduct from "../../data/product";
import useSearch from "../../components/hook/useSearch"; // Đường dẫn tương đối

export default function ShowSearchProduct() {
  // Sử dụng Destructuring để lấy các thành phần từ Hook
  const { searchTerm, setSearchTerm, filteredData } = useSearch(listProduct);

  return (
    <div className="container mt-4">
      {/* 1. Ô tìm kiếm */}
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Nhập tên sản phẩm để tìm..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Cập nhật state khi gõ
      />

      {/* 2. Hiển thị danh sách kết quả */}
      <div className="row">
        {filteredData.length > 0 ? ( // Kiểm tra nếu có kết quả
          filteredData.map((item) => (
            <div className="col-md-3 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={` /imges/${item.hinh}`}
                  className="card-img-top"
                  alt={item.ten}
                />

                <div className="card-body text-center">
                  <h5 className="card-title">{item.tensp}</h5>
                  <p className="text-danger fw-bold">
                    {item.gia.toLocaleString()} VND
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-100">Không tìm thấy sản phẩm nào!</p>
        )}
      </div>
    </div>
  );
}