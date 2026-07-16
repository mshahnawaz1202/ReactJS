import { useState, useEffect } from "react"
import { TodoProvider } from "./contexts"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }])

  }


  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }


  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }


  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))

    if (todos && todos.length>0) {
      setTodos(todos)
    }
  }, []);

  useEffect(()=>{ 
    localStorage.setItem('todos',JSON.stringify(todos))


  },[todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-gradient-to-br from-[#020617] to-[#0F172A] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto backdrop-blur-xl bg-slate-900/60 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-2xl px-6 py-6 text-slate-100 border border-slate-700/50">
          <h1 className="text-3xl font-bold text-center mb-8 mt-2 bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-col gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
              className="w-full"
              >
                <TodoItem todo = {todo}  />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
};

export default App;
