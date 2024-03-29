import { useState } from "react";
import Todo from "../Todo/Todo";
import "./editTodo.css";

const EditTodoForm = ({ editTodo, editTask, todo }) => {
  const [value, setValue] = useState(todo.task);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(todo.id);
    editTask(todo.id, value);
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        value={value}
        onChange={(e) => handleChange(e)}
      ></input>
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
