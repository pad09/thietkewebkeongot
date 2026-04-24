// Ví dụ: Truyền nhiều loại dữ liệu qua Props (cùng file)
function Product({ name, price, inStock, categories, info }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Giá: {price} VNĐ</p>
      <p>Còn hàng: {inStock ? "Có" : "Hết"}</p>
      <p>Danh mục: {categories.join(", ")}</p>
      <p>Xuất xứ: {info.origin}</p>
    </div>
  );
}

export default function Sp() {
  return (
    <div>
      <Product
        name="Laptop Dell"
        price={15000000}
        inStock={true}
        categories={["Laptop", "Văn phòng"]}
        info={{ origin: "USA" }}
      />
    </div>
  );
}
