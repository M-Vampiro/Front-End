import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="localhost:5173" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vampiro</h1>
      <div className="card">
        <button onMouseOut={() => setCount(count => count += 1)}>
          count is {count}
        </button>
        <p>
          Testing testing 123
        </p>
      </div>
      <p className="read-the-docs">
        This is fun to mess with
      </p>
    </>
  )
}

export default App
