import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    const trimmedTodo = todo.trim();

    if (!trimmedTodo) return;

    addTodo({
      todo: trimmedTodo,
      completed: false,
    });

    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="✨ What do you need to do today?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="
          flex-1
          rounded-xl
          border border-slate-600
          bg-slate-800
          px-4
          py-3
          text-slate-100
          placeholder:text-slate-400
          outline-none
          transition-all
          duration-300
          focus:border-amber-400
          focus:ring-2
          focus:ring-amber-400/40
        "
      />

      <button
        type="submit"
        className="
          rounded-xl
          bg-gradient-to-r
          from-amber-400
          to-amber-500
          px-6
          py-3
          font-semibold
          text-slate-900
          shadow-lg
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-amber-500/30
          active:scale-95
        "
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;