import Todo from "./components/Todo";
import { TodoProvider } from "./context/TodoContext";

const Example = () => {
  return (
    <>
      <TodoProvider>
        <h2>Reminder</h2>
        <Todo />
      </TodoProvider>
    </>
  );
};

export default Example;
