import React from "react"
import { useState } from "react"
// import { v4 as uuidv4 } from "uuid"
import style from "./HeaderList.module.css"
import moment from "moment"

const HeaderList = ({ setTodos, todos }) => {
  const [value, setValue] = useState("")
  const add = () => {
    if (value.length === 0 || value.length < 5) return

    if (
      todos.some((item) => item.tittle.toLowerCase() === value.toLowerCase())
    ) {
      alert("Такая задача уже существует")
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          tittle: value,
          // сделать : status вместо isDone/isImportant
          isDone: false,
          isImportant: false,
          time: moment().format("MMMM Do YYYY, h:mm:ss a"),
        },
      ])
      setValue("")
    }
  }

  return (
    <>
      {value.length < 5 && value.length >= 1 && (
        <div
          style={{
            color: "red",
            backgroundColor: "white",
            display: "inline-block",
          }}
        >
          Символов должно быть больше 5
        </div>
      )}
      <div className={style.boxInput}>
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              add()
            }
          }}
          placeholder='Введите текст'
          className={style.input}
          value={value}
          type='text'
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={style.btn} onClick={add} type='button'>
          Add
        </button>
      </div>
    </>
  )
}

export default HeaderList
