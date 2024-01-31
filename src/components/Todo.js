import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ todo, toggleComplete, editTodo, deleteTodo, starTodo }) => {
  const completed = todo.completed ? "completed click" : "click";
  const starred = todo.isStarred ? "starred Todo" : "Todo";

  return (
    <div className={starred}>
      <FontAwesomeIcon
        className={completed}
        icon={faStar}
        onClick={() => starTodo(todo.id)}
      />
      <p className={completed} onClick={() => toggleComplete(todo.id)}>
        {todo.task}
      </p>

      <FontAwesomeIcon
        className={completed}
        icon={faPenToSquare}
        onClick={() => editTodo(todo.id)}
      />
      <FontAwesomeIcon
        className={completed}
        icon={faTrash}
        onClick={() => deleteTodo(todo.id)}
      />
    </div>
  );
};

export default ToDo;
