import { createStore } from "redux";
const initialState = 0;
const reducer = (state = initialState, { type, step }) => {
  switch (type) {
    case "+":
      return state + step;
    case "-":
      return state - step;

    default:
      throw new Error("不明なactionです。");
  }
};

export default createStore(reducer);
