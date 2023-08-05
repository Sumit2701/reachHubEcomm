import React, { useState } from 'react';

const CountButton = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center rounded-l-full  font-bold text-xl   ">
      <button
        className="flex items-center justify-center w-16 h-16 bg-gray-100  rounded-l-full focus:outline-none"
        onClick={decrement}
      >
        <span className="text-2xl">-</span>
      </button>
      <div className="w-20 h-16 flex items-center bg-gray-100 justify-center   ">
        {count}
      </div>
      <button
        className="flex items-center justify-center w-16 h-16 bg-gray-100  rounded-r-full focus:outline-none"
        onClick={increment}
      >
        <span className="text-2xl">+</span>
      </button>
    </div>
  );
};

export default CountButton;
