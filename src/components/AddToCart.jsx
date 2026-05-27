import { useEffect, useState } from "react";

export default function AddToCart({ product, children }) {
  const [quantity, setQuantity] = useState(0);

  if (!product) return null;

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    const productInCart = storedCart.find(
      (item) => item.id === product.id
    );

    if (productInCart) {
      setQuantity(productInCart.quantity);
    }
  }, [product.id]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    let newCart = [...storedCart];

    const index = newCart.findIndex(
      (item) => item.id === product.id
    );

    if (quantity > 0) {
      if (index !== -1) {
        newCart[index].quantity = quantity;
      } else {
        newCart.push({
          ...product,
          quantity,
        });
      }
    } else {
      if (index !== -1) {
        newCart.splice(index, 1);
      }
    }

    localStorage.setItem("cart", JSON.stringify(newCart));
  }, [quantity, product]);

  // CHƯA THÊM VÀO GIỎ
  if (quantity === 0) {
    return (
      <button
        className="btn mt-2"
        style={{
          background: "#ffffff",
          color: "#0ea5e9",
          fontWeight: "bold",
          borderRadius: "20px",
          border: "1px solid #0ea5e9",
          padding: "8px 18px"
        }}
        onClick={() => setQuantity(1)}
      >
        {children}
      </button>
    );
  }

  // ĐÃ THÊM VÀO GIỎ
  return (
    <div className="d-flex justify-content-center mt-2">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderRadius: "10px",
          overflow: "hidden",
          border: "1px solid #bae6fd"
        }}
      >
        {/* - */}
        <button
          className="btn"
          style={{
            background: "#e0f2fe",
            color: "#0284c7",
            width: "35px",
            height: "35px",
            border: "none",
            fontWeight: "bold",
            padding: "0"
          }}
          onClick={() => setQuantity(quantity - 1)}
        >
          -
        </button>

        {/* quantity */}
        <div
          style={{
            width: "45px",
            height: "35px",
            background: "#f0f9ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            color: "#0369a1"
          }}
        >
          {quantity}
        </div>

        {/* + */}
        <button
          className="btn"
          style={{
            background: "#e0f2fe",
            color: "#0284c7",
            width: "35px",
            height: "35px",
            border: "none",
            fontWeight: "bold",
            padding: "0"
          }}
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}