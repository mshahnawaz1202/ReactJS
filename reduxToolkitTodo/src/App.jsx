import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Redux Toolkit Todo
          </h1>

          <p className="text-gray-500 mt-2">
            Learn Redux Toolkit by building a modern Todo App 🚀
          </p>
        </div>

        {/* Add Todo */}
        <div className="mb-8">
          <AddTodo />
        </div>

        {/* Todo List */}
        <Todo />
      </div>
    </div>
  );
}

export default App;