// import { useState } from 'react'
import './App.css'
import Card from './components/card'
function App() {
  // const [count, setCount] = useState(0)
  // let myObj = {
  //   username : 'shahanwaz',
  //   age : 20

  // }

  // let newArr = [1,2,3]
  // return (
  //   <>
  //     <h1 className="bg-red-400 text-white p-4 rounded-xl mb-4">
  //       Tailwind Test
  //     </h1>
  //     {/* <Card channel = 'shahnawaz'/> */}
  //     {/* <Card channel = 'shahnawaz' myO = myObj /> ==> errror */}
  //     {/* <Card channel = 'shahanawaz' someObj = {myObj} />
  //     <Card channel = 'shahanawaz' someObj = {newArr} /> */}
  //     <Card username ='shahnawaz' />
  //     <Card username = 'shah'/>
  //   </>
  // )


  return(
   <div className=" gap-6 p-6">
    <h1 className="bg-red-400 text-white p-4 rounded-xl mb-4">
        Tailwind Test
        </h1>
      <Card
        username="Shahnawaz"
        title="React Developer"
        description="Learning React and building modern web applications."
        image="https://picsum.photos/400/300?random=1"
        btnText = 'Profile View'
      />

      <Card
        username="Shah"
        title="Software Engineer"
        description="Exploring frontend development with Tailwind CSS."
        btnText = 'View Profile'
      />

    </div>
  )
}

export default App