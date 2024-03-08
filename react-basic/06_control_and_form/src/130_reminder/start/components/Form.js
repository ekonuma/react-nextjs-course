import { useState } from "react";

const Form = ({ addTask }) => {
  const [task, setTask] = useState("");

  const updateText = (e) => setTask(e.target.value);
  return (
    <>
      <div>
        <input htmlFor="add" type="text" onChange={updateText} />
        <button onClick={addTask}>追加</button>
      </div>
    </>
  );
};

export default Form;
