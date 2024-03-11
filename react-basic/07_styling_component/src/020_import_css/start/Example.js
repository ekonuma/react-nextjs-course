import { useState } from "react";
import "./Example.css";
const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <button
        className={`${isSelected ? "btn selected" : "btn"}`}
        onClick={clickHandler}
      >
        ボタン
      </button>
      <div>{isSelected && "クリックされました。"}</div>
    </>
  );
};

export default Example;
