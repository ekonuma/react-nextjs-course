import { createContext } from "react";
import Child from "./components/Child";
import useState from "react";
import OtherChild from "./components/OtherChild";
export const MyContext = createContext();

const Example = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <MyContext.Provider value={[value, setValue]}>
        <Child />
        <OtherChild />
      </MyContext.Provider>
    </>
  );
};

export default Example;
