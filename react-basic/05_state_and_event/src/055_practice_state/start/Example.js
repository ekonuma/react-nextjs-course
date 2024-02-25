import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const addCount = () => setCount(count + 1);
  const minusCount = () => setCount(count - 1);
  return (
    <>
      <h3>練習問題</h3>
      <p>現在のカウント数: {count}</p>
      <button onClick={addCount}>+</button>
      <button onClick={minusCount}>-</button>
    </>
  );
};

export default Example;
