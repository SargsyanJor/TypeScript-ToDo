import { useState, type ChangeEvent } from "react";
import { Input } from "../components/Input/Input";
import type { ITodo } from "../types/index";
import { ToDo } from "../components/ToDo/ToDo";
import "../app/styles/App.css";


function App() {
  const [text, setText] = useState<string>("");
  const [todo, setTodo] = useState<Array<ITodo>>([]);

  const changeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const addTodo = () => {
    setTodo((prev) => {
      return [...prev, { id: Date.now(), title: text, isDone: false }];
    });
    setText("");
  };

  const handleRemove = (id: number) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const handleChange = (id: number) => {
    setTodo(
      todo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <>
      <div className="todo-container">
        <Input
          text={text}
          changeText={changeText}
          handleSubmit={handleSubmit}
          addTodo={addTodo}
        />
        <ToDo
          todo={todo}
          handleRemove={handleRemove}
          handleChange={handleChange}
        />
      </div>
    </>
  );
}

export default App;
