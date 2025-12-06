import type { ITodo } from "../../types";
import "./ToDo.css"

type TodoProps = {
  todo: Array<ITodo>;
  handleRemove: (id: number) => void;
  handleChange: (id: number) => void;
};

export const ToDo = ({ todo, handleRemove, handleChange }: TodoProps) => {
  return (
    <div>
      {todo.map((todo) => (
        <div key={todo.id} className={todo.isDone ? "todo-item done" : "todo-item"}>
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={() => handleChange(todo.id)}
          />
          <span>{todo.title}</span>
          <button onClick={() => handleRemove(todo.id)}>X</button>
        </div>
      ))}
    </div>
  );
};
