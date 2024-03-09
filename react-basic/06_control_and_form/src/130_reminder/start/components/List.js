const List = ({ todoList, removeTask }) => {
  return (
    <>
      {todoList.map((task) => (
        <>
          <div>
            <button
              key={task.id}
              id={task.id}
              value={task.id}
              onClick={removeTask}
            >
              完了
            </button>
            <label>{task.content}</label>
          </div>
        </>
      ))}
    </>
  );
};

export default List;
