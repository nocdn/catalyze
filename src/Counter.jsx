import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div className="flex flex-col align-middle justify-center items-center gap-4">
      <p className="text-2xl">{count}</p>
      <div className="flex items-center gap-2">
        <button
          onClick={decrement}
          className="border border-gray-200 py-1 px-2"
        >
          -
        </button>
        <button
          onClick={resetCount}
          className="border border-gray-200 px-2 py-1"
        >
          reset
        </button>
        <button
          onClick={increment}
          className="border border-gray-200 py-1 px-2"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
