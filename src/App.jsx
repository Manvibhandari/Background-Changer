import { useState } from "react"


function App() {
  const [color , setColor] = useState("grey")

  return (
    <>
    <div
      className='w-screen h-screen duration-200'
      style={{ backgroundColor: color }}
      >
        
         <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>

            <button 
            onClick={ () => setColor("red")}
            className='outline-none px-3 py-4 rounded-full text-white  shadow-lg' 
            style={{backgroundColor: "red"}}> RED </button>
            
            <button
            onClick={ () => setColor("blue")}
            className='outline-none px-3 py-4 rounded-full text-white  shadow-lg'
            style={{backgroundColor: "blue"}}> BLUE </button>

           <button
            onClick={ () => setColor("green")}
            className='outline-none px-3 py-4 rounded-full text-white  shadow-lg'
            style={{backgroundColor: "green"}}> GREEN </button>

           <button
            onClick={ () => setColor("yellow")} 
            className='outline-none px-3 py-4 rounded-full text-white  shadow-lg' 
            style={{backgroundColor: "yellow"}}> YELLOW </button>

           <button
            onClick={ () => setColor("black")}
            className='outline-none px-3 py-4 rounded-full text-white  shadow-lg' 
            style={{backgroundColor: "black"}}> BLACK </button>

          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
