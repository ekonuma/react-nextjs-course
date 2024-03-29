import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();
const TodoDispatchContext = createContext();

const reducer = (todos, { type, payload }) => {
  switch (type) {
    case "add":
      return createTodo([...todos], payload);
    case "delete":
      return deleteTodo([...todos], payload);
    case "complete":
      return complete([...todos], payload);
    case "edit":
      return edit([...todos, payload]);
    default:
      break;
  }
};

const todosList = [
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
const edit = () => (todos, todo) =>
  todos.map((t) => {
    if (t.id === todo.id) {
      t = todo;
    }
    return todo;
  });
const deleteTodo = (todos, id) => todos.filter((todo) => todo.id !== id);
const createTodo = (todos, todo) => [...todos, todo];
const complete = (todos, id) => deleteTodo(todos, id);

export const TodoProvider = ({ children }) => {
  const [todo, dispatch] = useReducer(reducer, todosList);
  return (
    <TodoContext.Provider value={todo}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
export const useTodoDispatchContext = () => useContext(TodoDispatchContext);
