import { useTodoContext } from "../context/TodoContext";
import Item from "./Item";

const List = () => {
  const todos = useTodoContext();
  return (
    <div>
      {todos.map((todo) => (
        <Item todo={todo} />
      ))}
    </div>
  );
};

export default List;

