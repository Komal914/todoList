import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faStar, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import "./todo.css";

const ToDo = ({ todo, toggleComplete, editTodo, deleteTodo, starTodo, provided }) => {
  const completed = todo.completed ? "completed click" : "click";
  const starred = todo.isStarred ? "starred Todo" : "Todo";

  return (
    <div
      className={starred}
      ref={provided.innerRef}
      {...provided.draggableProps}
    >
      <FontAwesomeIcon
        className="drag-handle"
        icon={faGripVertical}
        {...provided.dragHandleProps}
      />
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
