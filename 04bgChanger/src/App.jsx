import { useState } from "react"

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor('orange')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'orange' }}>Orange</button>

            <button
              onClick={() => setColor('teal')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'teal' }}>Teal</button>

            <button
              onClick={() => setColor('cyan')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'cyan' }}>Cyan</button>

            <button
              onClick={() => setColor('violet')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'violet' }}>Violet</button>

            <button
              onClick={() => setColor('indigo')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'indigo' }}>Indigo</button>

            <button
              onClick={() => setColor('coral')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'coral' }}>Coral</button>

            <button
              onClick={() => setColor('crimson')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'crimson' }}>Crimson</button>

            <button
              onClick={() => setColor('gold')}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: 'gold' }}>Gold</button>

            <button
              onClick={() => setColor('salmon')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'salmon' }}>Salmon</button>

            <button
              onClick={() => setColor('turquoise')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'turquoise' }}>Turquoise</button>

            <button
              onClick={() => setColor('lime')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'lime' }}>Lime</button>

            <button
              onClick={() => setColor('maroon')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'maroon' }}>Maroon</button>

            <button
              onClick={() => setColor('navy')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'navy' }}>Navy</button>

            <button
              onClick={() => setColor('brown')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'brown' }}>Brown</button>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
