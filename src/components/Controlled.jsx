import { useState } from "react";

export default function Controlled() {
  const [name, setName] = useState("");

  return (
    <>
      <div>
        <h3>Vd Controlled Component</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <p>Tên sản phẩm: {name}</p>
    </>
  );
}
