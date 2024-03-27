import { useCalc, useCalcReducer } from "../context/CalcContext";

const Input = ({ name }) => {
  const state = useCalc();
  const dispatch = useCalcReducer();
  const numChangeHandler = (e) => {
    dispatch({
      type: "change",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  return (
    <div>
      {name}
      <input
        type="number"
        name={name}
        value={name === "a" ? state.a : state.b}
        onChange={numChangeHandler}
      />
    </div>
  );
};

export default Input;
