import React from "react"
import style from "./Task.module.css"
import { useState } from "react"
const Task = ({ todos, setTodos, showTime }) => {
  const [editValue, setEditValue] = useState(todos.tittle)
  const [isEdit, setEdit] = useState(false)

  const editList = () => {
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === todos.id) {
          return {
            ...item,

            tittle: editValue,
          }
        }
        return item
      })
    )
  }

  const taskDelete = () => {
    setTodos((prev) => prev.filter((item) => item.id !== todos.id))
  }
  const doneTask = () => {
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === todos.id) {
          return { ...item, isDone: !item.isDone }
        }
        return item
      })
    )
  }
  const importantTask = () => {
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === todos.id) {
          return { ...item, isImportant: !item.isImportant }
        }
        return item
      })
    )
  }
  return (
    <>
      {isEdit ? (
        <li className={style.task}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              padding: "2px 3px",
            }}
          >
            <button
              onClick={() => {
                editList()
                setEdit(false)
              }}
              style={{
                background: "grey",
                color: "white",
                border: "none",
                padding: "2px 5px",
                cursor: "pointer",
              }}
            >
              Save
            </button>
            <div>
              <input
                onChange={(e) => setEditValue(e.target.value)}
                value={editValue}
                type='text'
              />
            </div>
            <button
              onClick={() => setEdit(false)}
              style={{
                background: "grey",
                color: "white",
                border: "none",
                padding: "2px 5px",
                cursor: "pointer",
              }}
            >
              cancel
            </button>
          </div>
        </li>
      ) : (
        <li className={style.task}>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => setEdit((prev) => !prev)}
          >
            {todos.tittle}
          </p>
          {showTime ? (
            todos.time
          ) : (
            <div className={style.btnContainer}>
              <button
                className={style.btn}
                onClick={doneTask}
                style={{ background: todos.isDone ? "green" : "" }}
                type='button'
              >
                Done
              </button>
              <button
                className={style.btn}
                onClick={importantTask}
                style={{ background: todos.isImportant ? "orange" : "" }}
                type='button'
              >
                Important
              </button>
              <button className={style.btn} onClick={taskDelete} type='button'>
                Delete
              </button>
            </div>
          )}
        </li>
      )}
    </>
  )
}

export default Task
