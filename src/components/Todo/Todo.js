import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faStar, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import "./todo.css";

const ToDo = ({ todo, toggleComplete, editTodo, deleteTodo, starTodo }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: todo.id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  const completed = todo.completed ? "completed click" : "click";
  const starred = todo.isStarred ? "starred Todo" : "Todo";

  return (
    <div ref={setNodeRef} style={style} className={starred}>
      <span className="drag-handle" {...attributes} {...listeners}>
        <FontAwesomeIcon icon={faGripVertical} />
      </span>
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
