import { useToast } from "@chakra-ui/react";
import { useState } from "react";
const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const toast = useToast();
  const addTodo = (e) => {
    e.preventDefault();

    if (!enteredTodo) {
      toast({
        title: "新しいタスクを入力してください",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    createTodo(newTodo);

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
