import type { ChangeEvent } from "react";
import "./Input.css"

type InputProps = {
  text: string;
  changeText: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  addTodo: () => void;
};

export const Input = ({
  text,
  changeText,
  addTodo,
  handleSubmit,
}: InputProps) => {
  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input value={text} onChange={changeText} />
        <button onClick={addTodo}>+</button>
      </form>
    </div>
  );
};
