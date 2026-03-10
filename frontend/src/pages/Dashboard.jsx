import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  getTodos,
  createTodo,
  toggleTodo,
  deleteTodo,
} from "../services/todoService";

function Dashboard() {
  const { logout } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();

    if (!title) return;

    await createTodo({ title });
    setTitle("");
    fetchTodos();
  };

  const handleToggle = async (id) => {
    await toggleTodo(id);
    fetchTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  return (
    <div>
      <h1>TaskFlow Dashboard</h1>

      <button onClick={logout}>Logout</button>
      <form onSubmit={handleCreate}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo"
        />

        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>

            <button onClick={() => handleToggle(todo._id)}>Toggle</button>

            <button onClick={() => handleDelete(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
