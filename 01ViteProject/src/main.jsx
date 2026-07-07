// import React from 'react'
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'

// const user = 'shahnawaz'

// const anotherElement = (
//    <a href="http://google.com">Visit Google</a>
// )


// const ReactElement = React.createElement('a',{
//         href : 'https://google.com',
//         target : '_blank'
//     },'click to visit google',user)





export default function MyApp(){
  return(
    <h1>function my app</h1>
  )
}

createRoot(document.getElementById('root')).render(
  // anotherElement
  // ReactElement
  // <App/>
  <MyApp/>
  // MyApp()

)
