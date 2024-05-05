import useCounter from "./component/Counter";

const Example = () => {
  const { countUp, count } = useCounter();
  return (
    <>
      <div>Counts: {count}</div>
      <button onClick={countUp}>Count Up!</button>
    </>
  );
};

export default Example;
