import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ todo, toggleComplete, editTodo, deleteTodo, starTodo }) => {
  return (
    <div className={`${todo.isStarred ? "starred Todo" : "Todo"}`}>
      <FontAwesomeIcon icon={faStar} onClick={() => starTodo(todo.id)} />
      <p
        className={`${todo.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.task}
      </p>

      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(todo.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};

export default ToDo;
