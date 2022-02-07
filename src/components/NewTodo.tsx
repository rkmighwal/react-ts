import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todo-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const todosContext = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosContext.addToDo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
