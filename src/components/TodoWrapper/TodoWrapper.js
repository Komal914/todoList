import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { useLocalStorage } from "../../useLocalStorage";
import TodoForm from "../TodoForm/TodoForm";
import EditTodoForm from "../EditTodoForm/EditTodoForm";
import ToDo from "../Todo/Todo";
import "./todoWrapper.css";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useLocalStorage("TODO_TASKS", []);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = todos.findIndex((t) => t.id === active.id);
    const newIndex = todos.findIndex((t) => t.id === over.id);
    setTodos(arrayMove(todos, oldIndex, newIndex));
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
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={todos.map((t) => t.id)} strategy={verticalListSortingStrategy}>
          {todos.map((todo) =>
            todo.isEditing ? (
              <EditTodoForm
                key={todo.id}
                editTodo={editTodo}
                todo={todo}
                editTask={editTask}
              ></EditTodoForm>
            ) : (
              <ToDo
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
                starTodo={starTodo}
              ></ToDo>
            )
          )}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default TodoWrapper;
