import React, {useState} from 'react'
import './App.css'

function App() {
  const [inpValue, setInpValue] = useState('')
  const [todo, setTodo] = useState([])
  function handleInput(event){
    setInpValue(event.target.value)
  }
  function handleTodoAdd(){
    if (inpValue.trim() !== '') {
      setTodo((prevTasks) => [...prevTasks, inpValue]);
      setInpValue('');
    }
  }
  function handleClear(){
    setTodo([])
  }
  return (
    <>
      <div className='todo-app'>
        <h3>Todo App</h3>
        <div className="inputs">
          <input type="text" placeholder='Add your new todo' onChange={handleInput} value={inpValue}/>
          <button onClick={handleTodoAdd}>+</button>
        </div>
        <ul>
          {
            todo.map((task, index) => (
              <li key={index}>
                {task}
                <i id='icon' class="fa-solid fa-trash"></i>
              </li>
            ))
          }
        </ul>
        <div className="clear">
          <h5>You have 4 pending tasks</h5>
          <button onClick={handleClear}>Clear All</button>
        </div>
      </div>
    </>
  )
}

export default App
