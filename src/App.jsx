import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleincrement=()=>{
    setCount(count + 1)
  }

  const handledecrement=()=>{
    setCount(count - 1)
  }

  const handlereset=()=>{
    setCount(0)
  }


  return (
    <>
    <div className='container'>
      <div className='container-1'>
      <h1>COUNTER APP</h1>
      </div>
        <h1 className='title'>{count}</h1>
        <div className='container-2'>
        <button className='increment' onClick={handleincrement}>INCREMENT</button>
        <button className='decrement' onClick={handledecrement}>DECREMENT</button>
        <button className='reset' onClick={handlereset}>RESET</button>
      </div>
      </div>
      </>
  )
}

export default App
