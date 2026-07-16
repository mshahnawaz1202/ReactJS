import { useState } from "react";
import { useTodo } from "../contexts";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, toggleComplete, deleteTodo } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`group flex items-center gap-3 rounded-xl border p-3 transition-all duration-300
      ${
        todo.completed
          ? "bg-emerald-500/10 border-emerald-500/30"
          : "bg-slate-800/70 border-slate-700 hover:border-amber-400/40 hover:shadow-lg hover:shadow-amber-500/10"
      }`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleCompleted}
        className="h-5 w-5 cursor-pointer accent-amber-400"
      />

      {/* Todo Text */}
      <input
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        className={`flex-1 bg-transparent rounded-lg px-2 py-1 outline-none transition
        ${
          isTodoEditable
            ? "border border-amber-400 text-white"
            : "border border-transparent text-slate-100"
        }
        ${todo.completed ? "line-through text-slate-500" : ""}
        `}
      />

      {/* Edit / Save */}
      <button
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable(true);
          }
        }}
        disabled={todo.completed}
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400 text-slate-900 transition hover:scale-105 hover:bg-amber-300 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>

      {/* Delete */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500 text-white transition hover:scale-105 hover:bg-red-600 active:scale-95"
      >
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;