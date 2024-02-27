import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);
  const shuffle = () => {
    const shuffleNums = [...nums];
    const last = shuffleNums.pop();
    shuffleNums.unshift(last);
    setNums(shuffleNums);
  };
  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
