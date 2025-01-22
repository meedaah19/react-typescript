import { useState } from "react";

import NewTodo from "./component/NewTodo";
import Todos from "./component/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos ]= useState<Todo[]>([])

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo)
    }) ;
  }

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRomoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
