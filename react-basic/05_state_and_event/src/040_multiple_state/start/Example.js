import { useState } from "react";

const Example = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [countC, setCountC] = useState(0);
  return (
    <>
      <p>ボタン {countA} 回押しました</p>
      <button
        onClick={() => {
          setCountA(countA + 1);
        }}
      >
        countAボタン
      </button>
      <p>ボタン {countB} 回押しました</p>
      <button
        onClick={() => {
          setCountB(countB + 1);
        }}
      >
        countCボタン
      </button>
      <p>ボタン {countC} 回押しました</p>
      <button
        onClick={() => {
          setCountC(countC + 1);
        }}
      >
        countCボタン
      </button>
    </>
  );
};

export default Example;
