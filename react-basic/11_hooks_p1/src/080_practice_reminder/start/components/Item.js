import { useState } from "react";
import { useTodoDispatchContext } from "../context/TodoContext";

const Item = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const dispatch = useTodoDispatchContext();

  const setEnableEdit = ({ enable }) => {
    setEdit(enable);
  };
  return (
    <div key={todo.id}>
      <button onClick={() => dispatch({ type: "complete", payload: todo.id })}>
        完了
      </button>
      <form onSubmit={confirmContent} style={{ display: "inline" }}>
        {todo.editing ? (
          <input type="text" value={editingContent} onChange={changeContent} />
        ) : (
          <span onDoubleClick={toggleEditMode}>{todo.content}</span>
        )}
      </form>
    </div>
  );
};

export default Item;
