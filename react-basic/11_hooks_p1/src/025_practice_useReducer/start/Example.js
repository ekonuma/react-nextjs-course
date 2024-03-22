import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (state, { option, payload }) => {
  switch (option) {
    case "add":
      return { ...state, result: parseInt(state.a) + parseInt(state.b) };

    case "minus":
      return { ...state, result: state.a - state.b };

    case "multiply":
      return { ...state, result: state.a * state.b };

    case "divide":
      return { ...state, result: state.a / state.b };
    case "update":
      return { ...state, [payload.name]: payload.value };
    default:
      break;
  }
};

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    dispatch({ option: e.target.value });
  };

  const numChangeHandler = (e) => {
    dispatch({
      option: "update",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  return (
    <>
      <h3>練習問題</h3>
      <p>useReducerを使って完成コードと同じ機能を作成してください。</p>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select onChange={calculate} value={state.type}>
        {CALC_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <h1>結果：{state.result}</h1>
    </>
  );
};

export default Example;
