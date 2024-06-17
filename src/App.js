import Status from "./Components/Status/Status"
import { useState } from "react"
import HeaderList from "./Components/HeaderList/HeaderList"
import Task from "./Components/Task/Task"
import "./App.css"

function App() {
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("All")
  const [showTime, setShowTime] = useState(false)

  return (
    <>
      <div className='header'>
        <div className='container'>
          <h1>Todo List</h1>
          <HeaderList setTodos={setTodos} todos={todos} />
          <Status
            setShowTime={setShowTime}
            status={status}
            setStatus={setStatus}
          />
          <ul className='taskContainer'>
            {todos
              .filter((item) => {
                if (status === "Done") {
                  return item.isDone
                } else if (status === "inProgress") {
                  return !item.isDone
                } else if (status === "Important") {
                  return item.isImportant
                } else {
                  return item
                }
              })
              .map((item) => (
                <Task
                  showTime={showTime}
                  todos={item}
                  key={item.id}
                  setTodos={setTodos}
                />
              ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
