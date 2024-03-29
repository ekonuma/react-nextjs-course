import { useState } from "react";
import { useTodoDispatchContext } from "../context/TodoContext";
const Form = () => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const dispatch = useTodoDispatchContext();
  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    dispatch({ type: "add", payload: newTodo });

    setEnteredTodo("");
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;
