import React, { useState } from "react";
import ToDo from "../models/todo";

type TodoContextObj = {
  items: ToDo[];
  addToDo: (text: string) => void;
  removeToDo: (id: string) => void;
};

export const TodosContext = React.createContext<TodoContextObj>({
  items: [],
  addToDo: (text: string) => {},
  removeToDo: (id: string) => {},
});

const ToDosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const onAddHandler = (text: string) => {
    setTodos((prevState) => [...prevState, new ToDo(text)]);
  };

  const onRemoveHandler = (id: string) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const contextValue: TodoContextObj = {
    items: todos,
    addToDo: onAddHandler,
    removeToDo: onRemoveHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default ToDosContextProvider;
