import { createSlice, nanoid } from "@reduxjs/toolkit";


// initial state can be an object or an array

const initialState = {
    todos: [{ id: 1, text: 'Hello World!' }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo: (action,state) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },

    },

})





export const {addTodo, removeTodo} = todoSlice.actions // for components 

export default todoSlice.reducer  // for store to access each reducer





