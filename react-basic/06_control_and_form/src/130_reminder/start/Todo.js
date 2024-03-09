import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";
const Todo = () => {
  const todoList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [todoListVal, setTodoList] = useState(todoList);
  const removeTask = (e) => {
    const filteredTodos = todoListVal.filter(
      (task) => e.target.value != task.id,
    );
    setTodoList(filteredTodos);
  };

  const addTask = (newTask) => {
    let updatedTask = [...todoListVal];
    updatedTask.push(newTask);
    console.log(updatedTask);
    setTodoList(updatedTask);
  };

  return (
    <>
      <div>
        <h2>Reminder</h2>
      </div>
      <List todoList={todoListVal} removeTask={removeTask} />
      <Form addTask={addTask} />
    </>
  );
};

export default Todo;
