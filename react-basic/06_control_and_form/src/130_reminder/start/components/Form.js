import { useState } from "react";

const Form = ({ addTask }) => {
  const [task, setTask] = useState("");

  const updateText = (e) => setTask(e.target.value);
  const [lastId, setCurrentId] = useState(3);
  const createTask = () => {
    const currentId = lastId + 1;
    const newTask = {
      id: currentId,
      content: task,
    };
    setCurrentId(currentId);
    addTask(newTask);
  };
  return (
    <>
      <div>
        <input htmlFor="add" type="text" onChange={updateText} />
        <button onClick={createTask}>追加</button>
      </div>
    </>
  );
};

export default Form;
