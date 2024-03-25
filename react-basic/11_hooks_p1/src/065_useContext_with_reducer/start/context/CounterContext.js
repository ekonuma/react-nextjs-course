import { createContext, useContext, useReducer } from "react";

const CounterContext = createContext();
const CounterDispacheContext = createContext();

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case "+":
        return prev + step;
      case "-":
        return prev - step;
      default:
        throw new Error("不明なactionです。");
    }
  }, 0);

  return (
    <CounterContext.Provider value={state}>
      <CounterDispacheContext.Provider value={dispatch}>
        {children}
      </CounterDispacheContext.Provider>
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
export const useCounterDispache = () => useContext(CounterDispacheContext);
