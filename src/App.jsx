import { useState } from "react"


function App() {
  const [color,setColor]=useState("Black")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2  gap-7">
          <button className="bg-red-500 justify-center flex flex-wrap rounded-lg shadow-lg border-4 px-4 py-2" onClick={()=> setColor("Red")}>
            Red
          </button>
          <button className="bg-cyan-500 justify-center flex flex-wrap rounded-lg shadow-lg border-4 px-4 py-2" onClick={()=> setColor("Cyan")}>
            Cyan
          </button>
          <button className="bg-gray-500 justify-center flex flex-wrap rounded-lg shadow-lg border-4 px-4 py-2" onClick={()=> setColor("Grey")}>
           Grey
          </button>
          <button className="bg-green-500 justify-center flex flex-wrap rounded-lg shadow-lg border-4 px-4 py-2" onClick={()=> setColor("Green")}>
            Green
          </button>
          <button className="bg-blue-600 justify-center flex flex-wrap rounded-lg shadow-lg border-4 px-4 py-2" onClick={()=> setColor("Blue")}>
            Blue
          </button>
          
        </div>
 
      </div>
    </>
  )
}

export default App
