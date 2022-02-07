import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import ToDosContextProvider from "./store/todo-context";

function App() {
  return (
    <ToDosContextProvider>
      <NewTodo />
      <Todos />
    </ToDosContextProvider>
  );
}

export default App;
