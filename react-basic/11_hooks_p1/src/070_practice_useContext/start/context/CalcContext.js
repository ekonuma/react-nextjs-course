import { createContext, useContext, useReducer } from "react";

const CalcContext = createContext();
const CalcReducerContext = createContext();

export const CalcProvider = ({ children }) => {
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "change": {
        const { name, value } = payload;
        return { ...state, [name]: value };
      }
      case "add": {
        return { ...state, result: parseInt(state.a) + parseInt(state.b) };
      }
      case "minus": {
        return { ...state, result: state.a - state.b };
      }
      case "divide": {
        return { ...state, result: state.a / state.b };
      }
      case "multiply": {
        return { ...state, result: state.a * state.b };
      }
      default:
        throw new Error("operator is invalid");
    }
  };

  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <CalcContext.Provider value={state}>
      <CalcReducerContext.Provider value={dispatch}>
        {children}
      </CalcReducerContext.Provider>
    </CalcContext.Provider>
  );
};

export const useCalc = () => useContext(CalcContext);
export const useCalcReducer = () => useContext(CalcReducerContext);
