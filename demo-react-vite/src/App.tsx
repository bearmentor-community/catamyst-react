import { useState } from "react";
import { Counter } from "./components";

export default function App() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Demo React with Vite</h1>
      <p>Count: {count}</p>
      <Counter count={count} handleClick={handleClick} />
      <Counter count={count} handleClick={handleClick} />
    </div>
  );
}
