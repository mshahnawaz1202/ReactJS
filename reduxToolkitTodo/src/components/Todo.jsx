import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
        📋 Manage Your Todos
      </h2>

      {todos.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400 py-8">
          No Todos Available 🚀
        </div>
      ) : (
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-gray-800 dark:text-white text-lg font-medium break-all">
                {todo.text}
              </span>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="group bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition duration-300"
              >
                {/* Trash SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7L18.132 19.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.994-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3m-7 0h10"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todo;