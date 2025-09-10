import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((c) => c + 1);
  const handleDecrement = () => setCount((c) => c - 1);

  const sayName = (name, e) => {
    alert(name);
  };

  return (
    <main style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>React Events – Counter</h1>

      <p style={{ fontSize: 24 }}>Count: <strong>{count}</strong></p>

      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={handleIncrement}>Increment +1</button>
        <button onClick={handleDecrement}>Decrement -1</button>
      </div>

      <hr style={{ margin: "24px 0" }} />

      <button onClick={() => sayName("Adam")}>
        Exemple: who serve cunt?
      </button>
    </main>
  );
}