 import { useState } from "react";

export default function Test() {
    const [count, setCount] = useState(0);
    const Tinh = () => {
        setCount(count => count - 1);
    }
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={Tinh}>+</button>
    </>
  )

    
}