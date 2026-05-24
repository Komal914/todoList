import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useLocalStorage } from "../../useLocalStorage";
import TodoForm from "../TodoForm/TodoForm";
import EditTodoForm from "../EditTodoForm/EditTodoForm";
import ToDo from "../Todo/Todo";
import "./todoWrapper.css";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useLocalStorage("TODO_TASKS", []);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(todos);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setTodos(reordered);
  };

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
        isStarred: false,
      },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (id, value) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: value, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  const starTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isStarred: !todo.isStarred } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="TodoWrapper">
      <h1>Let's Get Things Done!</h1>
      <TodoForm addTodo={addTodo} todos={todos}></TodoForm>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todos.map((todo, index) =>
                todo.isEditing ? (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <EditTodoForm
                          editTodo={editTodo}
                          todo={todo}
                          editTask={editTask}
                          dragHandleProps={provided.dragHandleProps}
                        ></EditTodoForm>
                      </div>
                    )}
                  </Draggable>
                ) : (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided) => (
                      <ToDo
                        todo={todo}
                        toggleComplete={toggleComplete}
                        editTodo={editTodo}
                        deleteTodo={deleteTodo}
                        starTodo={starTodo}
                        provided={provided}
                      ></ToDo>
                    )}
                  </Draggable>
                )
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TodoWrapper;
