const List = ({ todoList, removeTask }) => {
  return (
    <>
      {todoList.map((task) => (
        <>
          <div>
            <button id={task.id} value={task.id} onClick={removeTask}>
              完了
            </button>
            {task.content}
          </div>
        </>
      ))}
    </>
  );
};

export default List;
