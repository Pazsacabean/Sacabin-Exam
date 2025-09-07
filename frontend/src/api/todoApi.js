import axios from "axios";

const API_URL = "http://localhost:3000/api";

// ✅ Get all todos
export async function getTodos() {
  const res = await axios.get('${API_URL}/todos');
  return res.data;
}

// ✅ Add a new todo
export async function addTodo(text) {
  const res = await axios.post('${API_URL}/addTodo, { text }');
  return res.data;
}

// ✅ Mark a todo as completed
export async function completeTodo(id) {
  const res = await axios.put('${API_URL}/completeTodo, { id }');
  return res.data;
}