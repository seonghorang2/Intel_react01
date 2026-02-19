import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const MIN = -5;
  const MAX = 5;

  const addCount = () => {
    setCount((prev) => (prev < MAX ? prev + 1 : prev));
    console.log(count);
  };

  const minusCount = () => {
    setCount((prev) => (prev > MIN ? prev - 1 : prev));
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h1
        className={`count ${count > 0 ? "counter_positive" : count < 0 ? "counter_negative" : ""}`}
      >
        {count}
      </h1>
      <div className="buttons">
        <button onClick={minusCount} disabled={count === MIN}>
          -
        </button>

        <button onClick={resetCount}>Reset</button>
        <button onClick={addCount} disabled={count === MAX}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
