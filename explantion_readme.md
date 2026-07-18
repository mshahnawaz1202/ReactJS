
# React & Redux Toolkit — Complete Study Notes

## Table of Contents

1. [React - Setup &amp; Basics](https://claude.ai/chat/f907e31b-77ba-4d74-a053-1ada44425b4b#1-react---setup--basics)
2. [React Fiber Complete Guide](https://claude.ai/chat/f907e31b-77ba-4d74-a053-1ada44425b4b#2-react-fiber-complete-guide)
3. [Tailwind CSS and React Props](https://claude.ai/chat/f907e31b-77ba-4d74-a053-1ada44425b4b#3-tailwind-css-and-react-props)
4. [React Hooks Explanation: useCallback, useEffect, and useRef](https://claude.ai/chat/f907e31b-77ba-4d74-a053-1ada44425b4b#4-react-hooks-explanation-usecallback-useeffect-and-useref)
5. [React Notes: Keys, index.js Exports, and useId](https://claude.ai/chat/f907e31b-77ba-4d74-a053-1ada44425b4b#5-react-notes-keys-indexjs-exports-and-useid)
6. [React Router](https://claude.ai/chat/f907e31b-77ba-4d74-a053-1ada44425b4b#6-react-router)
7. [Context API](https://claude.ai/chat/f907e31b-77ba-4d74-a053-1ada44425b4b#7-context-api)
8. [Local Storage](https://claude.ai/chat/f907e31b-77ba-4d74-a053-1ada44425b4b#8-local-storage)
9. [Redux Toolkit](https://claude.ai/chat/f907e31b-77ba-4d74-a053-1ada44425b4b#9-redux-toolkit)

---

## 1. React - Setup & Basics

### 1.1 Creating a React Project

#### Method 1 : Create React App (CRA)

**Step 1 : Create Project**

```bash
npx create-react-app my-app
```

**Step 2 : Move into project**

```bash
cd my-app
```

**Step 3 : Run project**

```bash
npm start
```

#### Method 2 : Vite (Recommended)

**Step 1 : Create Project**

```bash
npm create vite@latest
```

**Step 2 : Install Dependencies**

```bash
npm install
```

**Step 3 : Run Project**

```bash
npm run dev
```

### 1.2 React Components

A Component is simply a JavaScript function that returns JSX.

Example:

```jsx
function Welcome() {
  return <h1>Hello, World!</h1>;
}
```

or

```jsx
const Welcome = () => {
  return <h1>Hello, World!</h1>;
}
```

#### Why Components?

* Components divide the UI into small, reusable pieces.
* Each component has its own responsibility.
* Makes code easier to read, maintain, and reuse.
* Helps build large applications efficiently.

Example:

```
<App>
 ├── <Navbar />
 ├── <Hero />
 ├── <Products />
 └── <Footer />
```

#### JSX

JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code inside JavaScript.

Example:

```jsx
const element = <h1>Hello React</h1>;
```

JSX is NOT understood directly by browsers.
It is converted into JavaScript function calls.

JSX

```jsx
<h1>Hello</h1>
```

becomes

```js
React.createElement("h1", null, "Hello")
```

or (Modern JSX Runtime)

```js
jsx("h1", { children: "Hello" })
```

#### React vs Vite (JSX Handling)

React:

* React is a JavaScript library for building user interfaces.
* React provides components, hooks, state management, and rendering.

Vite:

* Vite is a build tool and development server.
* It compiles JSX into JavaScript using Babel or esbuild.
* It provides fast development with Hot Module Replacement (HMR).

> **Important:**
>
> React does NOT compile JSX.
>
> Vite, Webpack, Parcel, or Babel compile JSX before the browser runs it.

#### Understand React Flow and Structure

Typical React application structure:

```
src/
 ├── components/
 │     ├── Navbar.jsx
 │     ├── Footer.jsx
 │     └── Card.jsx
 │
 ├── pages/
 │     ├── Home.jsx
 │     └── About.jsx
 │
 ├── App.jsx
 └── main.jsx
```

Execution Flow:

```
main.jsx
      ↓
<App />
      ↓
Components
      ↓
Child Components
      ↓
Rendered UI
```

Data Flow:

```
Parent Component
      ↓ (Props)
Child Component
      ↓
Rendered Output
```

React follows a one-way (top-to-bottom) data flow.

#### Create Your Own React Library and JSX

React is not magic.

A JSX expression like:

```jsx
<h1>Hello</h1>
```

can be represented as a JavaScript object:

```js
const element = {
  type: "h1",
  props: {
    children: "Hello"
  }
};
```

A custom createElement function:

```js
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children
    }
  };
}
```

Then render it manually:

```js
const element = createElement("h1", null, "Hello");
```

This is the basic idea behind how React creates a Virtual DOM.

Building your own mini React helps you understand:

* JSX transformation
* Virtual DOM
* Rendering process
* Diffing concepts
* Why React exists

#### Why You Need Hooks

Early React used Class Components for:

* State
* Lifecycle methods
* Side effects

Example:

```jsx
class App extends React.Component {
  state = {
    count: 0
  };
}
```

Class components became difficult to:

* Read
* Reuse logic
* Maintain
* Test

Hooks solved these problems by allowing state and lifecycle features inside functional components.

Example:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

Benefits:

* Cleaner code
* No classes required
* Reusable logic
* Better organization
* Easier testing

#### Hooks

Hooks are special React functions that let functional components use React features such as state, lifecycle methods, context, refs, and more.

> **Rules of Hooks:**
>
> * Only call hooks at the top level.
> * Never call hooks inside loops or conditions.
> * Only call hooks inside React function components or custom hooks.

Common Hooks:

1. **useState()** — Manage component state.
2. **useEffect()** — Perform side effects such as API calls, timers, and subscriptions.
3. **useContext()** — Access global data without prop drilling.
4. **useRef()** — Store mutable values or access DOM elements.
5. **useMemo()** — Memoize expensive calculations.
6. **useCallback()** — Memoize functions to prevent unnecessary re-renders.
7. **useReducer()** — Manage complex state logic.

#### Why Projects Are Important

Learning React concepts alone is not enough.

Projects help you understand:

* Component architecture
* State management
* Props
* Hooks
* Routing
* API integration
* Forms
* Performance optimization
* Folder organization
* Real-world problem solving

**Recommended Beginner Projects:**

* Counter App
* Todo App
* Weather App
* Calculator
* Notes App

**Intermediate Projects:**

* E-commerce Store
* Movie Search App
* Expense Tracker
* Blog Website
* Chat Application

**Advanced Projects:**

* Admin Dashboard
* Social Media Clone
* Learning Management System
* Project Management Tool
* Full Stack MERN Application

#### Key Takeaways

* ✔ Components are reusable JavaScript functions that return JSX.
* ✔ JSX is transformed into JavaScript before execution.
* ✔ React builds the UI, while Vite compiles and serves the application.
* ✔ React applications follow a component-based architecture and one-way data flow.
* ✔ JSX ultimately becomes JavaScript objects representing UI elements.
* ✔ Hooks enable state and lifecycle features in functional components.
* ✔ Building projects is the best way to master React concepts and apply them in real-world applications.

---

## 2. React Fiber Complete Guide

React Fiber is the new reconciliation engine introduced in React 16. It replaced the old stack-based reconciliation algorithm.

Fiber is the core architecture that makes React faster, more responsive, and capable of handling complex UI updates without blocking the browser.

**References:**

1. React Fiber Architecture — https://github.com/acdlite/react-fiber-architecture
2. GeeksforGeeks - What is React Fiber? — https://www.geeksforgeeks.org/reactjs/what-is-react-fiber/

### Why Was React Fiber Introduced?

Before React Fiber, React used a synchronous rendering approach.

When a state update happened:

```js
setState()
```

React immediately started updating the entire component tree.

Example:

```
App
|
|-- Navbar
|
|-- Sidebar
|
|-- Dashboard
|      |
|      |-- Charts
|      |
|      |-- Tables
|
|-- Footer
```

React had to complete the whole tree update before giving control back to the browser.

**Problems:**

* UI freezing
* Slow typing
* Laggy animations
* Poor user experience

Example:

If a user is typing a message:

```
User typing
      |
      |
      v
React renders huge component tree
      |
      |
      v
Browser finally updates screen
```

The typing feels slow.

### The Idea Behind React Fiber

Fiber introduced incremental rendering.

Instead of doing all work at once:

Old React:

```
Work
  |
  |
  v
Complete Everything
  |
  |
  v
Browser Update
```

Fiber:

```
Small Work Unit
      |
      v
   Pause
      |
      v
Browser Handles User Input
      |
      v
   Resume Work
```

Fiber allows React to:

* Pause rendering
* Resume rendering
* Cancel unnecessary work
* Prioritize important updates

### What Is a Fiber?

A Fiber is a unit of work.

Every React component has a Fiber object.

Example:

Component:

```jsx
function App(){

    return (
        <>
          <Header/>
          <Content/>
        </>
    )

}
```

Fiber Tree:

```
             App Fiber
                 |
       --------------------
       |                  |
       v                  v
 Header Fiber       Content Fiber
```

Each component is represented internally as a Fiber node.

### Fiber Object Structure

A Fiber object contains information about a component.

Conceptually:

```js
Fiber {

    type,

    key,

    stateNode,

    child,

    sibling,

    return,

    pendingProps,

    memoizedProps,

    memoizedState,

    alternate,

    flags

}
```

### Important Fiber Properties

#### 1. TYPE

Defines what the Fiber represents.

Example:

```jsx
<div>Hello</div>
```

Fiber:

```js
type = "div"
```

Component:

```jsx
function Header(){}
```

Fiber:

```js
type = Header
```

#### 2. KEY

Used during list reconciliation.

Example:

```jsx
items.map(item => (

    <li key={item.id}>
        {item.name}
    </li>

))
```

Keys help React identify which elements changed.

#### 3. CHILD

Points to the first child Fiber.

Example:

```
App

|
|
v

Header
```

Header is stored as App's child.

#### 4. SIBLING

Connects multiple children.

Example:

```
App

 |
 |
 v

Header

 |
 |
 v

Main

 |
 |
 v

Footer
```

Fiber does not store children as a normal array.

It uses linked structure:

```
child -> first child

sibling -> next child
```

#### 5. RETURN

Points to the parent Fiber.

Example:

```
       App

        ^
        |
     return

        |

      Header
```

#### 6. ALTERNATE

One of the most important Fiber concepts.

React keeps two Fiber trees:

1. **Current Fiber Tree** — The tree currently displayed on screen.
2. **Work-In-Progress Fiber Tree** — The new tree being prepared.

Example:

```
Current Fiber

       |
       |
       v

Work-In-Progress Fiber
```

After completion:

```
Swap Trees
```

This technique is called double buffering.

### Old React vs React Fiber

**Old React:**

* Stack recursion
* Synchronous rendering
* Cannot pause work
* Cannot cancel work
* No priority system

**React Fiber:**

* Fiber objects
* Incremental rendering
* Can pause work
* Can resume work
* Can cancel work
* Priority scheduling

### Work Loop in React Fiber

Fiber processes updates using a work loop.

Flow:

```
Start

 |
 v

Take one Fiber

 |
 v

Process Fiber

 |
 v

Check browser priority

 |
 +------------+
 |            |
No           Yes
 |            |
 v            v

Continue    Pause

              |
              v

        Browser handles events

              |
              v

           Resume
```

### Scheduling and Priority

Fiber introduced priority-based scheduling.

Example:

**High Priority:**

* User typing
* Button clicks
* Animations

**Medium Priority:**

* Loading data

**Low Priority:**

* Background rendering

Example:

User typing:

```
Priority = High
```

Loading comments:

```
Priority = Low
```

React handles important work first.

### Render Phase and Commit Phase

React Fiber has two phases.

#### 1. RENDER PHASE

React creates the new Fiber tree.

During this phase:

* Work can pause
* Work can restart
* Work can be cancelled

Example:

```
Old Fiber Tree

        |
        |
        v

Create New Fiber Tree
```

Nothing changes on screen yet.

#### 2. COMMIT PHASE

React applies changes to the real DOM.

Flow:

```
Render Phase

      |
      v

Find Changes

      |
      v

Commit Phase

      |
      v

Update DOM
```

Commit phase cannot be interrupted.

### Reconciliation in Fiber

Reconciliation means comparing old and new UI trees.

Example:

Old:

```jsx
<h1>Hello</h1>
```

New:

```jsx
<h1>Hello World</h1>
```

React detects only text changed.

It updates only:

```
Hello

to

Hello World
```

It does not recreate the entire DOM.

### Fiber and Virtual DOM

Fiber does NOT replace Virtual DOM.

Relationship:

```
JSX
 |
 v
React Elements
 |
 v
Virtual DOM
 |
 v
Fiber Tree
 |
 v
Reconciliation
 |
 v
Commit
 |
 v
Real DOM
```

Virtual DOM is still used.

Fiber is the algorithm that manages updates.

### Real Example

Component:

```jsx
function Counter(){

 const [count,setCount] = useState(0);


 return (

    <button onClick={() =>
       setCount(count+1)
    }>

       {count}

    </button>

 )

}
```

When button is clicked:

```
Click
 |
 v
setState()
 |
 v
Create update
 |
 v
Create Work-In-Progress Fiber
 |
 v
Compare old Fiber
 |
 v
Find changes
 |
 v
Commit
 |
 v
Update DOM
```

Only the changed part updates.

### Real World Example

Imagine Instagram:

**Tasks:**

* Uploading images
* Notifications
* Animations
* User typing comments

Most important:

```
Typing comment
```

Less important:

```
Loading advertisements
```

Fiber allows:

```
Typing

    |
    v

Immediate update


Advertisement

    |
    v

Wait
```

### React 18 and Fiber

React Fiber enables modern React features:

* Concurrent Rendering
* Suspense
* startTransition()
* Selective Hydration

These features depend on Fiber's ability to schedule and prioritize work.

### Complete Internal Flow

```
User Action
      |
      v
setState()
      |
      v
Create Update
      |
      v
Scheduler Assigns Priority
      |
      v
Build Work-In-Progress Fiber Tree
      |
      v
Reconciliation
      |
      v
Pause if required
      |
      v
Resume Work
      |
      v
Render Complete
      |
      v
Commit Phase
      |
      v
Update DOM
      |
      v
Browser Paint
```

### Interview Questions

**Q1. What is React Fiber?**

Answer:

React Fiber is React's reconciliation engine introduced in React 16. It breaks rendering work into smaller units and allows React to pause, resume, prioritize, and cancel updates.

---

**Q2. Why was React Fiber introduced?**

Answer:

To solve performance problems caused by synchronous rendering and make applications more responsive.

---

**Q3. What is a Fiber node?**

Answer:

A Fiber node is a JavaScript object representing a React component and storing information about its state, props, relationships, and update status.

---

**Q4. Does Fiber replace Virtual DOM?**

Answer:

No.

Fiber replaces the reconciliation algorithm, not the Virtual DOM.

---

**Q5. What are Fiber phases?**

Answer:

1. **Render Phase**
   * Creates new Fiber tree
   * Can be interrupted
2. **Commit Phase**
   * Updates real DOM
   * Cannot be interrupted

### Summary

React Fiber is the internal architecture that makes modern React fast.

Main concepts:

* Fiber = Unit of work
* Fiber tree represents components
* Work can be paused and resumed
* Updates have priorities
* Render phase prepares changes
* Commit phase updates DOM
* Virtual DOM still exists
* Fiber enables Concurrent React

*(End of "React Fiber Complete Guide" document)*

---

## 3. Tailwind CSS and React Props

### 1. Tailwind CSS Setup with Vite

Tailwind CSS is a utility-first CSS framework.

Instead of writing custom CSS:

Example:

```css
.card {
    background-color: black;
    padding: 20px;
    border-radius: 10px;
}
```

Tailwind allows us to write styles directly in JSX:

```jsx
<div className="bg-black p-5 rounded-xl">
    Card Content
</div>
```

#### Installing Tailwind CSS with Vite

Create a React + Vite project:

```bash
npm create vite@latest my-project
```

Go into project:

```bash
cd my-project
```

Install Tailwind CSS:

```bash
npm install tailwindcss @tailwindcss/vite
```

Then configure Tailwind according to the official Vite setup.

Tailwind works by scanning your React files and generating only the CSS classes that you use.

Example:

```jsx
className="bg-red-500 text-white p-4"
```

Tailwind generates CSS for:

* background color
* text color
* padding

### 2. Why We Use Components in React

A component is a reusable piece of UI.

Example:

A Card component:

`Card.jsx`

```jsx
function Card(){
    return(
        <div>
            Card Design
        </div>
    )
}
```

Now we can use this component anywhere:

`App.jsx`

```jsx
<Card />
```

Instead of writing the same HTML multiple times, we create one component and reuse it.

### 3. What are Props?

Props means "Properties".

Props are used to pass data from a parent component to a child component.

Flow:

```
        Parent Component
              |
              |
              |  Props
              ↓

        Child Component
```

Example:

`App.jsx`

```jsx
<Card username="shahnawaz" />
```

Here:

`username` is a prop.

The value:

```
"shahnawaz"
```

is passed to Card component.

### 4. Why Do We Need Props?

Without props:

```jsx
<Card />
```

Every card will have the same data.

Example:

```jsx
function Card(){

return(
    <h1>
        Shahnawaz
    </h1>
)

}
```

If we want another user:

```
Shah
```

We have to create another component.

This is not reusable.

With props:

```jsx
<Card username="shahnawaz" />

<Card username="shah" />
```

Same component.

Different data.

Output:

Card 1:

```
Shahnawaz
```

Card 2:

```
Shah
```

### 5. Passing Simple Props

`App.jsx`

```jsx
<Card username="shahnawaz" />
```

`Card.jsx`

```jsx
function Card(props){

    console.log(props)

}
```

Output:

```js
{
    username:"shahnawaz"
}
```

React automatically creates an object called props.

Example:

```js
props = {

    username:"shahnawaz"

}
```

So we can access the value:

```jsx
function Card(props){

    console.log(props.username)

}
```

Output:

```
shahnawaz
```

### 6. Passing Multiple Props

`App.jsx`

```jsx
<Card
    username="shahnawaz"
    age="20"
    role="Developer"
/>
```

React converts it into:

```js
props = {

 username:"shahnawaz",

 age:"20",

 role:"Developer"

}
```

Access:

```jsx
function Card(props){

console.log(props.username)
console.log(props.age)
console.log(props.role)

}
```

### 7. Props are Objects

When we write:

```jsx
<Card username="shahnawaz"/>
```

React internally creates:

```js
props = {

    username:"shahnawaz"

}
```

That is why we access values using:

```js
props.username
```

### 8. Destructuring Props

Instead of:

```jsx
function Card(props){

console.log(props.username)

}
```

We can directly extract values:

```jsx
function Card({username}){

console.log(username)

}
```

Both are same.

Example:

```jsx
function Card({username, age}){

return(

<h1>
    {username} - {age}
</h1>

)

}
```

Usage:

```jsx
<Card
 username="shahnawaz"
 age="20"
/>
```

Output:

```
shahnawaz - 20
```

### 9. Passing Objects as Props

We can also pass objects.

Example:

```js
let myObj = {

    username:"shahnawaz",

    age:20

}
```

Wrong:

```jsx
<Card myO = myObj />
```

Why?

Because JSX cannot understand normal JavaScript variables directly.

Correct:

```jsx
<Card someObj={myObj} />
```

Here:

`{}` tells React:

```
"Execute JavaScript code"
```

React receives:

```js
props = {

 someObj:{
    username:"shahnawaz",
    age:20
 }

}
```

Access:

```jsx
function Card(props){

console.log(props.someObj.username)

}
```

Output:

```
shahnawaz
```

### 10. Passing Arrays as Props

Example:

```js
let newArr=[1,2,3]
```

Passing:

```jsx
<Card someObj={newArr}/>
```

Received:

```jsx
function Card(props){

console.log(props.someObj)

}
```

Output:

```
[1,2,3]
```

### 11. Difference Between String and JavaScript Values

String value:

```jsx
<Card username="shahnawaz"/>
```

Here:

`shahnawaz` is directly a string.

JavaScript value:

```jsx
<Card username={myVariable}/>
```

Here:

`{}` tells React to evaluate JavaScript.

Examples:

```jsx
<Card age={20}/>
```

Number

```jsx
<Card data={myObj}/>
```

Object

```jsx
<Card list={newArr}/>
```

Array

### 12. Complete Example

`App.jsx`

```jsx
function App(){

let user={

    name:"Shahnawaz",

    age:20

}


return(

<Card user={user}/>

)

}
```

`Card.jsx`

```jsx
function Card({user}){


return(

<div>

<h1>
{user.name}
</h1>


<p>
{user.age}
</p>


</div>

)

}
```

Output:

```
Shahnawaz

20
```

### 13. Props vs State

**Props:**

* Data passed from parent to child
* Read-only
* Used for component reusability

Example:

```jsx
<Card username="shahnawaz"/>
```

**State:**

* Data managed inside component
* Can change over time
* Uses hooks like useState()

Example:

```js
const [count,setCount]=useState(0)
```

### Summary

1. Tailwind CSS provides utility classes for styling React components.
2. Components make UI reusable.
3. Props allow data passing between components.
4. Props are received as an object.
5. Access props:

```jsx
function Card(props){

props.username

}
```

6. Or use destructuring:

```jsx
function Card({username}){

username

}
```

7. Use `{}` when passing JavaScript values:

```jsx
<Card age={20}/>

<Card data={myObj}/>
```

8. Props make React components dynamic and reusable

---

## 4. React Hooks Explanation: useCallback, useEffect, and useRef

### 1. useCallback Hook in React

Official Documentation: https://react.dev/reference/react/useCallback

#### What is useCallback?

useCallback is a React Hook that is used to memorize (cache) a function between renders.

Normally, whenever a React component re-renders, all functions inside that component are recreated in memory.

useCallback prevents unnecessary recreation of functions by returning the same function reference until its dependencies change.

#### Syntax

```js
const memoizedFunction = useCallback(() => {
    // function logic
}, [dependencies]);
```

#### Parameters

1. **Function:** The function that you want to memorize.
2. **Dependency Array:** Values that determine when the function should be recreated.

#### Example Without useCallback

```jsx
function App() {

    const handleClick = () => {
        console.log("Button clicked");
    };

    return (
        <button onClick={handleClick}>
            Click
        </button>
    );
}
```

Problem:

Every time App renders, handleClick is recreated as a new function.

If this function is passed to a child component, the child may re-render unnecessarily.

#### Example With useCallback

```jsx
import { useCallback } from "react";


function App() {

    const handleClick = useCallback(() => {
        console.log("Button clicked");
    }, []);


    return (
        <button onClick={handleClick}>
            Click
        </button>
    );
}
```

Now React keeps the same function reference between renders.

#### When to use useCallback

1. Passing functions to memoized child components.

Example:

```jsx
const Child = React.memo(({ onClick }) => {
    console.log("Child Render");
    return <button onClick={onClick}>Click</button>;
});


function Parent() {

    const handleClick = useCallback(() => {
        console.log("Clicked");
    }, []);


    return <Child onClick={handleClick} />;
}
```

2. When a function is used as a dependency in useEffect.

Example:

```jsx
const fetchData = useCallback(() => {
    console.log("Fetching data");
}, []);


useEffect(() => {
    fetchData();
}, [fetchData]);
```

> **Important Notes:**
>
> * useCallback does not make code faster automatically.
> * Use it only when function reference stability is required.
> * Overusing useCallback can make code harder to understand.

### 2. useEffect Hook in React

Official Documentation: https://react.dev/reference/react/useEffect

#### What is useEffect?

useEffect is a React Hook used to perform side effects in functional components.

Side effects are operations that happen outside the normal rendering process.

**Examples of Side Effects:**

* API calls
* Updating document title
* Timers
* Subscribing to events
* Working with browser APIs
* Connecting to external services

#### Syntax

```js
useEffect(() => {

    // side effect code

    return () => {
        // cleanup code
    };

}, [dependencies]);
```

#### How useEffect Works

useEffect runs after the component renders.

Example:

```jsx
import { useEffect } from "react";


function App() {

    useEffect(() => {
        console.log("Component Mounted");
    }, []);


    return <h1>Hello React</h1>;
}
```

Output:

```
Component Mounted
```

The empty dependency array means the effect runs only once after the first render.

#### Dependency Array Behavior

**1. No Dependency Array**

```js
useEffect(() => {

    console.log("Runs after every render");

});
```

Runs after every component render.

**2. Empty Dependency Array**

```js
useEffect(() => {

    console.log("Runs only once");

}, []);
```

Runs only when the component mounts.

**3. With Dependencies**

```js
useEffect(() => {

    console.log("Value changed");

}, [count]);
```

Runs whenever count changes.

#### Cleanup Function

Cleanup is used to remove resources before the component is destroyed or before the effect runs again.

Example:

```js
useEffect(() => {

    const timer = setInterval(() => {
        console.log("Running...");
    }, 1000);


    return () => {
        clearInterval(timer);
    };

}, []);
```

The cleanup function stops the timer when the component unmounts.

#### Common useEffect Examples

**API Call:**

```js
useEffect(() => {

    fetch("https://api.example.com/users")
    .then(response => response.json())
    .then(data => console.log(data));

}, []);
```

**Update Page Title:**

```js
useEffect(() => {

    document.title = "React App";

}, []);
```

> **Important Notes:**
>
> * Do not use useEffect for calculations that can happen during rendering.
> * Keep dependency arrays correct.
> * Avoid unnecessary API calls.
> * Always cleanup subscriptions, timers, and listeners.

### 3. useRef Hook in React

Official Documentation: https://react.dev/reference/react/useRef

#### What is useRef?

useRef is a React Hook that allows you to store a mutable value that persists between renders.

Changing a ref value does not cause the component to re-render.

Syntax:

```js
const reference = useRef(initialValue);
```

useRef returns an object:

```js
{
    current: value
}
```

Example:

```jsx
import { useRef } from "react";


function App() {

    const inputRef = useRef(null);


    return (

        <input ref={inputRef} />

    );

}
```

Accessing DOM Element:

```js
inputRef.current.focus();
```

#### Common Uses of useRef

**1. Accessing DOM Elements**

Example:

```jsx
function Form() {

    const inputRef = useRef();


    function focusInput() {

        inputRef.current.focus();

    }


    return (

        <>
            <input ref={inputRef} />

            <button onClick={focusInput}>
                Focus Input
            </button>
        </>

    );

}
```

**2. Storing Previous Values**

Example:

```jsx
function App({count}) {

    const previousCount = useRef();


    useEffect(() => {

        previousCount.current = count;

    }, [count]);


    return (

        <h1>
            Previous: {previousCount.current}
        </h1>

    );

}
```

**3. Storing Mutable Values**

Example:

```js
const timerId = useRef(null);


timerId.current = setTimeout(() => {

    console.log("Timer");

}, 1000);
```

#### useRef vs useState

**useState:**

* Stores data.
* Updating value causes re-render.
* Used for UI-related values.

**useRef:**

* Stores mutable values.
* Updating value does not cause re-render.
* Used for DOM access and persistent values.

Example:

useState:

```js
const [count, setCount] = useState(0);


setCount(10);
```

Component re-renders.

useRef:

```js
const count = useRef(0);


count.current = 10;
```

Component does not re-render.

### useCallback vs useEffect vs useRef

**useCallback:**

Purpose: Memorize functions.

Used For:

* Prevent unnecessary function recreation.
* Optimize child component rendering.

Example:

```js
const handleClick = useCallback(() => {

}, []);
```

---

**useEffect:**

Purpose: Perform side effects after rendering.

Used For:

* API calls.
* Timers.
* Subscriptions.
* External operations.

Example:

```js
useEffect(() => {

}, []);
```

---

**useRef:**

Purpose: Store values without causing re-render.

Used For:

* DOM references.
* Previous values.
* Mutable variables.

Example:

```js
const ref = useRef();
```

### Summary

**useCallback:** Caches functions and keeps the same function reference.

**useEffect:** Handles side effects after rendering.

**useRef:** Stores mutable values and accesses DOM elements without re-rendering.

Together these hooks help React applications become more efficient, organized, and easier to manage.

---

## 5. React Notes: Keys, index.js Exports, and useId

### 1. React Key Prop in Loops

Whenever we render a list of elements in React using a loop like map(), we must provide a unique "key" prop to each element.

Example:

```jsx
{
    currencyOptions.map((curr) => (
        <option key={curr} value={curr}>
            {curr}
        </option>
    ))
}
```

**Why do we use key?**

* React uses the key to identify each element uniquely.
* It helps React efficiently update, add, or remove elements from the DOM.
* It improves performance during re-rendering.
* The key value should always be unique among siblings.

**Wrong Example:**

```jsx
{
    currencyOptions.map((curr) => (
        <option key={curr} value="usd">
            usd
        </option>
    ))
}
```

Problems:

* Every option has the same value.
* React cannot properly track changes.
* The displayed data will not be dynamic.

**Correct Example:**

```jsx
{
    currencyOptions.map((curr) => (
        <option key={curr} value={curr}>
            {curr}
        </option>
    ))
}
```

> **Rule:** Always remember to use "key" when creating elements inside loops in React.

### 2. index.js File in React Components

In small projects, we can import components directly:

Example:

```js
import InputBox from "./components/InputBox";
import Button from "./components/Button";
```

But in large projects, we may have many components:

```
components/
|
|-- InputBox.jsx
|-- Button.jsx
|-- Navbar.jsx
|-- Card.jsx
|-- Footer.jsx
```

Managing many imports becomes difficult.

**Solution:** Create an index.js file inside the components folder.

Example structure:

```
components/
|
|-- InputBox.jsx
|-- Button.jsx
|-- Navbar.jsx
|-- index.js
```

`index.js`:

```js
export { default as InputBox } from "./InputBox";
export { default as Button } from "./Button";
export { default as Navbar } from "./Navbar";
```

Now we can import everything from one file:

Instead of:

```js
import InputBox from "./components/InputBox";
import Button from "./components/Button";
```

We can write:

```js
import { InputBox, Button, Navbar } from "./components";
```

**Benefits:**

* Cleaner imports
* Easier project management
* Better organization
* Useful in large-scale React applications

### 3. useId Hook in React

useId is a built-in React Hook used to generate unique IDs.

Documentation: https://react.dev/reference/react/useId

Syntax:

```js
const id = useId();
```

Example:

```jsx
import { useId } from "react";


function InputBox(){

    const inputId = useId();


    return (
        <>
            <label htmlFor={inputId}>
                Username
            </label>

            <input id={inputId} />
        </>
    )
}
```

**Why use useId?**

In HTML, labels and inputs are connected using id:

```html
<label htmlFor="username">
    Username
</label>

<input id="username" />
```

When we create reusable components, multiple inputs may have the same id.

Example:

```jsx
<InputBox />
<InputBox />
<InputBox />
```

Duplicate IDs can create accessibility problems.

useId automatically generates unique IDs:

Example generated IDs:

```
:r1:
:r2:
:r3:
```

Each component receives a different ID.

**Advantages of useId:**

1. Creates unique IDs automatically.
2. Prevents duplicate ID problems.
3. Improves accessibility.
4. Useful when creating reusable components.
5. Works correctly with React Server Rendering.

> **Important Notes:**
>
> * useId is a React Hook.
> * It should only be called inside React components.
> * Do not use useId for generating list keys.
> * For list keys, use unique data values from your data source.

Example:

Correct:

```js
const id = useId();
```

Wrong:

```jsx
items.map((item)=>{
    <div key={useId()}>
        {item}
    </div>
})
```

For keys, use:

```jsx
<div key={item.id}>
    {item.name}
</div>
```

### Summary

1. Always use "key" when rendering lists using map() in React.
2. Use index.js inside folders to export multiple components from one place.
3. useId() is a React Hook used to generate unique IDs for accessibility purposes.
4. Do not use useId() for list keys.
5. Good component organization makes React projects easier to maintain.

---

## 6. React Router

### What is React Router?

React Router is a library used for handling navigation and routing in React applications.

Normally, when we use HTML:

```html
<a href="/about">About</a>
```

the browser reloads the complete page.

But React is a Single Page Application (SPA), where we don't want full page refresh. React Router allows us to change components/pages without refreshing the browser.

### Install React Router

After creating a React project, go inside the project directory and install:

```bash
npm install react-router-dom
```

Example:

```bash
npm create vite@latest my-app

cd my-app

npm install

npm install react-router-dom
```

### Link and NavLink

#### Link

Link is the React Router replacement for the normal HTML `<a>` tag.

HTML:

```html
<a href="/about">
    About
</a>
```

Problem:

The `<a>` tag refreshes the complete page.

Flow:

```
Click Link
    |
    |
Browser Request
    |
    |
Reload Entire Application
```

In React, we use:

```js
import { Link } from "react-router-dom"
```

Example:

```jsx
<Link to="/about">
    About
</Link>
```

**Advantages:**

* No page refresh
* Faster navigation
* Maintains React state
* Works with SPA architecture

#### NavLink

NavLink is an advanced version of Link.

It provides extra functionality to know:

1. Which route is currently active
2. Which route is pending/loading

Import:

```js
import { NavLink } from "react-router-dom"
```

Example:

```jsx
<NavLink 
    to="/about"
>
    About
</NavLink>
```

The main difference:

**Link:** Only provides navigation.

**NavLink:** Provides navigation + active route information.

### Using isActive and isPending in NavLink

NavLink allows a callback function inside className.

Example:

```jsx
<NavLink

    to="/about"

    className={({isActive, isPending}) =>

        `${isActive ? "text-blue-500" : "text-gray-500"}
         ${isPending ? "opacity-50" : ""}`

    }

>

About

</NavLink>
```

**Parameters:**

**isActive**

It tells whether the current route is active or not.

Example:

Current URL:

```
localhost:5173/about
```

NavLink:

```
About
```

Then:

```
isActive = true
```

**isPending**

It tells whether navigation is currently in progress.

Example:

User clicks a route.

During loading:

```
isPending = true
```

### Router Setup

In React Router we create routes using:

```js
createBrowserRouter()
```

and connect routes using:

```js
RouterProvider
```

Import in main.jsx:

```js
import { createBrowserRouter, RouterProvider } from "react-router-dom"
```

Example:

```js
const router = createBrowserRouter([

    {
        path: "/",
        element: <Home/>
    }

])
```

Then:

```jsx
<RouterProvider router={router}/>
```

### Outlet

Outlet is used for nested routing.

It acts as a placeholder where child routes are rendered.

Example Layout:

```jsx
function Layout(){

    return (

        <>

            <Header/>

            <Outlet/>

            <Footer/>

        </>

    )

}
```

Here:

**Header** — Always remains same.

**Footer** — Always remains same.

**Outlet** — Changes according to route.

Flow:

```
Browser URL

     |
     |
React Router

     |
     |
Layout Component

     |
     |
----------------------
Header
----------------------

Outlet

(Home/About/Contact)

----------------------

Footer
----------------------
```

Example:

`/home`

Shows:

```
Header
Home Component
Footer
```

`/about`

Shows:

```
Header
About Component
Footer
```

`/contact`

Shows:

```
Header
Contact Component
Footer
```

### Creating Routes

There are two common methods.

#### Method 1: Object Based Routing

```js
const router = createBrowserRouter([

    {

        path: "/",

        element: <Layout/>,


        children:[


            {

                path:"",

                element:<Home/>

            },


            {

                path:"about",

                element:<About/>

            },


            {

                path:"contact",

                element:<Contact/>

            }


        ]

    }

])
```

**Explanation:**

Parent Route:

```
path: "/"

element: Layout
```

Child Routes:

```
/       -> Home

/about  -> About

/contact -> Contact
```

Because Layout contains:

```jsx
<Outlet/>
```

children components appear there.

#### Method 2: Using createRoutesFromElements

First import:

```js
import {

    createBrowserRouter,

    createRoutesFromElements,

    Route

}

from "react-router-dom"
```

Example:

```jsx
const router = createBrowserRouter(

    createRoutesFromElements(

        <Route 

            path="/"

            element={<Layout/>}

        >


            <Route

                path=""

                element={<Home/>}

            />


            <Route

                path="about"

                element={<About/>}

            />


            <Route

                path="contact"

                element={<Contact/>}

            />


        </Route>

    )

)
```

This method uses JSX syntax instead of objects.

Both methods create the same routing structure.

### useParams()

useParams is a React Router hook used to access dynamic URL parameters.

Example:

Route:

```jsx
<Route 

    path="/user/:id"

    element={<Profile/>}

/>
```

URL:

```
localhost:5173/user/101
```

Here:

```
:id = 101
```

Inside Profile Component:

```jsx
import { useParams } from "react-router-dom"


function Profile(){

    const {id} = useParams()


    return (

        <h1>
            User ID: {id}
        </h1>

    )

}
```

Output:

```
User ID: 101
```

Real Example:

```
/product/500
```

```
id = 500
```

Then we can fetch product details from database/API.

### Loader

Loader is used to fetch data before rendering a route.

Without Loader:

```
Component Render

      |

      |

useEffect()

      |

      |

Fetch API

      |

      |

Update UI
```

Problem:

User sees loading state.

With Loader:

```
Route Request

      |

      |

Loader runs

      |

      |

Data fetched

      |

      |

Component renders with data
```

Example:

```js
const router = createBrowserRouter([


{

    path:"/users",

    element:<Users/>,

    loader: async()=>{

        const response = await fetch(
            "https://api.example.com/users"
        )

        return response.json()

    }

}


])
```

Inside Component:

```jsx
import { useLoaderData } from "react-router-dom"


function Users(){


    const users = useLoaderData()


    return (

        <div>

            {
                users.map(user=>(

                    <h1>
                        {user.name}
                    </h1>

                ))
            }

        </div>

    )

}
```

**Advantages of Loader:**

* Data loads before component renders
* Better user experience
* Cleaner code
* Avoids multiple useEffect calls

### Complete React Router Flow

```
User clicks NavLink

        |

        |

React Router checks URL

        |

        |

Find matching Route

        |

        |

Run Loader (if available)

        |

        |

Render Layout

        |

        |

Render Child Component inside Outlet

        |

        |

Update UI without refreshing page
```

### Summary

**React Router:** Handles navigation in React SPA.

**Link:** Navigation without page refresh.

**NavLink:** Link + active route information.

**Outlet:** Placeholder for child routes.

**createBrowserRouter:** Creates routing configuration.

**RouterProvider:** Connects router with React app.

**useParams:** Gets dynamic URL values.

**Loader:** Fetches data before rendering component.

**Nested Routing:** Keeps common UI like Header/Footer while changing page content.

---

## 7. Context API

### What is Context API?

Context API is React's built-in feature for sharing data globally.

It allows multiple components to access the same data without passing props manually.

It solves the problem called:

> "Props Drilling"

**Props Drilling:** Passing data from Parent -> Child -> GrandChild -> GreatGrandChild even if intermediate components don't need that data.

Example without Context:

```
<App user="Shah Nawaz">
    ↓
<Navbar user="Shah Nawaz">
    ↓
<Header user="Shah Nawaz">
    ↓
<Profile user="Shah Nawaz"/>
```

Every component passes the same prop.

This becomes difficult in large projects.

Context API solves this.

### Real Life Example

Imagine a University.

```
Vice Chancellor
      |
      |
-------------------------
|           |          |
Teacher    Staff     Students
```

Instead of every department asking the Vice Chancellor again and again for information,

The VC announces it once.

Everyone can access it.

Context API works exactly like this.

Provider stores the data.

Any component inside Provider can access that data.

### Context API Flow

```
                 Provider
                    |
        -------------------------
        |          |           |
      Login      Card       Profile
        |                        |
        |________________________|
                 Shared Data
```

Only components inside Provider can access Context.

### Step 1: Create Context

`UserContext.js`

```js
import React from "react";

const UserContext = React.createContext()

export default UserContext
```

**Explanation**

```js
React.createContext()
```

creates an empty global storage.

Initially it has no data.

Think of it as creating an empty locker.

Right now:

```
UserContext
```

contains nothing.

Later Provider will fill it.

### Step 2: Create Provider

`UserContextProvider.js`

```jsx
const UserContextProvider = ({children})=>{

    const [user,setUser] = React.useState(null)

    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}
```

**Explanation**

Provider is responsible for storing data.

```js
const [user,setUser] = React.useState(null)
```

Initially

```
user = null
```

No one is logged in.

Provider wraps all components.

```jsx
<UserContext.Provider value={{user,setUser}}>
    {children}
</UserContext.Provider>
```

"value" is the global data.

Anything inside value becomes available to every child component.

Global Data:

```js
{
    user,
    setUser
}
```

Now every child component can use

```
user
```

and

```
setUser
```

### Why ?

Suppose App.jsx

```jsx
<UserContextProvider>

    <Login/>

    <Profile/>

</UserContextProvider>
```

Everything between opening and closing tag

becomes

```
children
```

So

```jsx
children =

<>
    <Login/>
    <Profile/>
</>
```

Provider renders those components.

Without children,

nothing inside Provider would appear.

### App Structure

```jsx
<App>

<UserContextProvider>

    <Login/>

    <Profile/>

</UserContextProvider>

</App>
```

After Provider wraps them,

both Login and Profile share the same data.

### Step 3: Access Context using useContext

Inside Login

```js
const {setUser} = useContext(UserContext)
```

**Explanation**

```js
useContext(UserContext)
```

reads data stored inside Provider.

Provider value was

```js
{
    user,
    setUser
}
```

So here

```js
const {setUser}
```

extracts only setUser.

If needed

```js
const {user,setUser}
```

can access both.

### Login Component Flow

```js
const [username,setUsername] = useState('')
```

Stores username input.

Initially

```
username = ""
```

---

```js
const [password,setPassword] = useState('')
```

Stores password input.

Initially

```
password = ""
```

---

```jsx
<input

value={username}

onChange={(e)=>setUsername(e.target.value)}

>
```

Whenever user types

```
A

username = "A"

AB

username = "AB"

ABC

username = "ABC"
```

Same happens for password.

### Handle Submit

```js
const handleSubmit = (e)=>{

    e.preventDefault()

    setUser({
        username,
        password
    })

}
```

**Explanation**

Suppose

```
username = Shah

password = 12345
```

After clicking Submit

```js
setUser({

    username:"Shah",

    password:"12345"

})
```

updates the global context.

Before

```
user = null
```

After

```js
user = {

    username:"Shah",

    password:"12345"

}
```

Every component using Context gets updated automatically.

### Step 4: Profile Component

```js
const {user} = useContext(UserContext)
```

Reads user from global context.

Initially

```
user = null
```

Then

```jsx
if(!user){

    return <div>Please Login First</div>

}
```

Since no user exists,

Output

```
Please Login First
```

### After Login

Suppose Login stores

```js
setUser({

    username:"Shah",

    password:"12345"

})
```

Now Profile runs again.

user is no longer null.

So

```jsx
return

<div>

Welcome {user.username}

</div>
```

Output

```
Welcome Shah
```

Notice

Profile never received props.

Still it knows username.

That is the power of Context API.

### Complete Flow

```
User types

Username = Shah

Password = 12345

        |
        |
        ▼

handleSubmit()

        |
        |
        ▼

setUser({

username:"Shah",

password:"12345"

})

        |
        |
        ▼

Provider updates

        |
        |
        ▼

Global Context changes

        |
        |
        ▼

Profile automatically re-renders

        |
        |
        ▼

Output

Welcome Shah
```

### Data Flow Diagram

```
                   UserContext

                        ▲
                        |
            createContext()

                        |
                        ▼

             UserContextProvider

      user = null

      setUser()

                        |
                        |
         value={{user,setUser}}

                        |
        --------------------------------
        |                              |
        |                              |
        ▼                              ▼

      Login                        Profile

useContext()                  useContext()

setUser()                     user

        |                         |
        |_________________________|

             Shared Global Data
```

### Why useContext()?

Without useContext

You cannot read Context data.

Syntax

```js
const value = useContext(UserContext)
```

or

```js
const {user,setUser} = useContext(UserContext)
```

### Why Context API?

**Advantages**

* ✔ No Props Drilling
* ✔ Built into React
* ✔ Easy to use
* ✔ Global State Sharing
* ✔ Cleaner Code
* ✔ Automatic Re-render when Context changes

### Limitations

Context API is best for

* ✔ Logged-in User
* ✔ Theme
* ✔ Language
* ✔ Dark Mode
* ✔ Authentication
* ✔ Small Global Data

Not recommended for

* Huge Applications
* Very Complex State
* Thousands of updates

For those,

Redux Toolkit (RTK) is a better choice.

### Context API vs Redux Toolkit

**Context API**

* ✔ Built into React
* ✔ Easy Setup
* ✔ Small Apps
* ✔ Authentication
* ✔ Theme
* ✔ Language

**Redux Toolkit**

* ✔ External Library
* ✔ Better Performance
* ✔ Large Projects
* ✔ Predictable State
* ✔ Powerful DevTools
* ✔ Middleware Support
* ✔ Async API Handling

**Rule**

Small Project → Context API

Large Enterprise Project → Redux Toolkit (RTK)

---

## 8. Local Storage

Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

### What is Local Storage?

Local Storage is a Web Storage API provided by the browser that allows us to store data in the user's browser as key-value pairs.

* Data remains saved even after the browser is closed.
* Data is not sent to the server.
* Data is stored per website (origin).
* Only strings can be stored directly.

**Storage Limit**

* Approximately 5MB to 10MB depending on the browser.

### Basic Syntax

Save Data

```js
localStorage.setItem("lastname", "Smith");
```

Read Data

```js
const lastname = localStorage.getItem("lastname");
```

Remove One Item

```js
localStorage.removeItem("lastname");
```

Remove All Items

```js
localStorage.clear();
```

### Methods

#### 1. localStorage.setItem(key, value)

Purpose: Stores data in the browser.

Syntax:

```js
localStorage.setItem(key, value);
```

Example:

```js
localStorage.setItem("username", "Shah Nawaz");
```

Result:

```
username => Shah Nawaz
```

---

#### 2. localStorage.getItem(key)

Purpose: Retrieves data from Local Storage.

Syntax:

```js
localStorage.getItem(key);
```

Example:

```js
const username = localStorage.getItem("username");

console.log(username);
```

Output:

```
Shah Nawaz
```

If the key does not exist:

```
null
```

---

#### 3. localStorage.removeItem(key)

Purpose: Removes a specific key and its value.

Syntax:

```js
localStorage.removeItem(key);
```

Example:

```js
localStorage.removeItem("username");
```

---

#### 4. localStorage.clear()

Purpose: Removes every item stored in Local Storage for the current website.

Syntax:

```js
localStorage.clear();
```

Example:

```js
localStorage.clear();
```

### Parameters

| Parameter | Description                              |
| --------- | ---------------------------------------- |
| key       | Required. Name of the item to store.     |
| value     | Required. Value associated with the key. |

### Return Value

| Method       | Returns              |
| ------------ | -------------------- |
| setItem()    | undefined            |
| getItem()    | Stored value or null |
| removeItem() | undefined            |
| clear()      | undefined            |

### Important Note

Local Storage stores ONLY strings.

If you save an object directly:

```js
const user = {
    name: "Ali",
    age: 20
};

localStorage.setItem("user", user);
```

Output:

```
"[object Object]"
```

This is NOT useful.

### Storing Objects

Use JSON.stringify() before storing.

Example:

```js
const user = {
    name: "Ali",
    age: 20
};

localStorage.setItem(
    "user",
    JSON.stringify(user)
);
```

Stored Value:

```
'{"name":"Ali","age":20}'
```

### Reading Objects

Convert the string back into an object using JSON.parse().

Example:

```js
const user = JSON.parse(
    localStorage.getItem("user")
);

console.log(user.name);
```

Output:

```
Ali
```

### React Example

Saving Todos

```js
useEffect(() => {
    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}, [todos]);
```

Loading Todos

```js
const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
});
```

### Advantages

* ✔ Data persists after closing the browser.
* ✔ Simple to use.
* ✔ No database required.
* ✔ Fast access.
* ✔ Good for small amounts of data like:
  * Theme
  * Language
  * Todos
  * User Preferences

### Limitations

* ✘ Stores only strings.
* ✘ Limited storage (about 5–10 MB).
* ✘ Not secure for passwords or sensitive data.
* ✘ Data is available only on the same website (origin).

### Interview Questions

**Q1. What is Local Storage?**

Local Storage is a browser feature that stores data as key-value pairs and keeps it even after the browser is closed.

**Q2. Which methods are available in Local Storage?**

* setItem()
* getItem()
* removeItem()
* clear()

**Q3. Why do we use JSON.stringify()?**

Because Local Storage can only store strings.

**Q4. Why do we use JSON.parse()?**

To convert the stored JSON string back into a JavaScript object.

**Q5. Does Local Storage expire automatically?**

No. Data remains until it is manually removed using removeItem(), clear(), or by the user clearing browser data.

---

## 9. Redux Toolkit

Official Documentation: https://redux-toolkit.js.org/

Redux Toolkit is the official and easiest way to manage state in React applications.

### What is State?

State means the data of your application.

Examples:

* User Login Information
* Todo List
* Shopping Cart
* Theme (Dark/Light)
* Counter Value

Instead of passing data from one component to another (Props Drilling), Redux stores all the data in one central place called the Store.

### Redux Toolkit Flow

```
          Component
               |
               | dispatch()
               ▼
            Reducer
               |
               | updates
               ▼
             Store
               |
               | useSelector()
               ▼
          React Component
```

Simple Flow:

```
User Action
    ↓
dispatch(action)
    ↓
Reducer
    ↓
Store Updated
    ↓
useSelector gets new data
    ↓
UI Re-renders Automatically
```

### 1. Store

Store is the central place where all application data is stored.

Think of it like a Database for your frontend.

Example:

```js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
});
```

**Explanation**

`configureStore()` — Creates the Redux Store.

`reducer` — Contains all reducers of your application.

Every feature (Todo, User, Cart etc.) has its own reducer.

### 2. Reducer (Slice)

Reducers are responsible for changing the Store.

A reducer NEVER directly changes the old state.

Redux Toolkit uses Immer internally, so we can write code that looks like mutation.

Usually create a folder like:

```
src
│
├── features
│    │
│    └── todo
│          │
│          └── todoSlice.js
```

Example:

```js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: "Hello World!"
        }
    ]
};

export const todoSlice = createSlice({
    name: "todo",

    initialState,

    reducers: {

        addTodo: (state, action) => {

            const todo = {
                id: nanoid(),
                text: action.payload
            };

            state.todos.push(todo);
        },

        removeTodo: (state, action) => {

            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        }

    }

});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
```

**Explanation**

`createSlice()` — Creates reducers and actions automatically.

`name` — Unique name of this slice.

`initialState` — Default data stored in Redux.

`reducers` — Functions that update the Store.

`nanoid()` — Generates a unique ID.

`state` — Current Redux State.

`action` — Data sent from dispatch().

### 3. useDispatch()

useDispatch() is used to SEND data to Redux Store.

It calls a reducer.

Example:

```js
const dispatch = useDispatch();

dispatch(addTodo("Learn Redux"));
```

Flow:

```
Button Click
      ↓
dispatch(addTodo("Learn Redux"))
      ↓
Reducer Executes
      ↓
Store Updated
```

**Simple Meaning**

`dispatch()` means

"Hey Redux, run this reducer and update the Store."

### 4. useSelector()

useSelector() is used to READ data from Redux Store.

Example:

```js
const todos = useSelector((state) => state.todos);
```

**Explanation**

`state` — Complete Redux Store.

`state.todos` — Gets only the todos from the Store.

Whenever the Store changes, useSelector automatically updates the component.

Flow:

```
Store Updated
      ↓
useSelector()
      ↓
New Data Received
      ↓
Component Re-renders
```

**Simple Meaning**

`useSelector()` means

"Give me the latest data from Redux Store."

### Difference Between useDispatch and useSelector

**useDispatch()**

Purpose: Send data to Redux

Works With: Reducers

Used For: Add, Update, Delete

Example:

```js
dispatch(addTodo("Study"))
```

---

**useSelector()**

Purpose: Read data

Works With: Store

Used For: Display Data

Example:

```js
const todos = useSelector(state => state.todos)
```

### Complete Redux Toolkit Flow

**Step 1**

User types:

```
Study Redux
```

↓

**Step 2**

```js
dispatch(addTodo("Study Redux"))
```

↓

**Step 3**

Reducer runs

```js
addTodo(state, action)
```

↓

**Step 4**

Reducer creates:

```js
{
    id: nanoid(),
    text: "Study Redux"
}
```

↓

**Step 5**

Reducer adds it into Store

↓

Store becomes

```js
todos = [
    {
        id:1,
        text:"Hello World!"
    },
    {
        id:2,
        text:"Study Redux"
    }
]
```

↓

**Step 6**

useSelector() reads updated Store

↓

**Step 7**

React automatically re-renders

↓

New Todo appears on the screen.

### Important Interview Questions

**Q1. What is Redux Toolkit?**

The official and recommended way to manage state in React applications.

---

**Q2. What is Store?**

A central place where all application state is stored.

---

**Q3. What is a Slice?**

A Slice contains:

* Initial State
* Reducers
* Actions

---

**Q4. What is Reducer?**

A function that updates the Redux Store.

---

**Q5. What is dispatch()?**

dispatch() sends an action to Redux so the reducer can update the Store.

---

**Q6. What is useSelector()?**

useSelector() reads data from the Redux Store.

---

**Q7. What is action.payload?**

The data sent through dispatch().

Example:

```js
dispatch(addTodo("Study Redux"))
```

Here,

```js
action.payload = "Study Redux"
```

---

**Q8. What is nanoid()?**

A function that generates a unique ID automatically.

### One-Line Revision

**Store** → Stores all application data.

**Reducer** → Updates the Store.

**Slice** → Collection of reducers + actions + initial state.

**dispatch()** → Sends data to Redux.

**useDispatch()** → Calls dispatch() inside React.

**useSelector()** → Reads data from Redux Store.

**Action** → Object that tells Redux what to do.

**Payload** → Actual data sent with an action.

**nanoid()** → Creates unique IDs automatically.

### Easy Way to Remember

**Store** → Warehouse

**Reducer** → Worker

**dispatch()** → Give Order

**Action** → Order

**Payload** → Item/Data

**useSelector()** → Read Data

Flow:

```
User
  ↓
dispatch()
  ↓
Reducer
  ↓
Store
  ↓
useSelector()
  ↓
React UI Updates
```
