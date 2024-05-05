import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount((prev) => prev + 1);
  };

  return {
    countUp,
    count,
  };
};

export default useCounter;
