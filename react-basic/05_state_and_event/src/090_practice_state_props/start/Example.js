import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountResult title="カウント" count={count} />
      <CountUpdate setCount={setCount} />
    </>
  );
};
const CountResult = ({ title, count }) => (
  <h3>
    {title}: {count}
  </h3>
);

const CountUpdate = ({ setCount }) => {
  const countUp = () => setCount((prevState) => prevState + 1);
  const countDown = () => setCount((prevState) => prevState - 1);
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
