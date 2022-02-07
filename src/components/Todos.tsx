import React, { useContext } from "react";
import { TodosContext } from "../store/todo-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosContext = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosContext.items.map((item) => (
        <TodoItem
          key={item.id}
          onClick={todosContext.removeToDo.bind(this, item.id)}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
