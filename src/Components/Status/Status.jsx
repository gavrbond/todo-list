import React from "react"
import style from "./Status.module.css"
const Status = ({ status, setStatus, setShowTime }) => {
  return (
    <div style={{ position: "relative" }} className={style.statusContainer}>
      <button
        onClick={() => setShowTime((prev) => !prev)}
        style={{
          position: "absolute",
          top: "2.5px",
          left: "10px",
          background: "grey",
          color: "white",
          border: "none",
          padding: "2px 5px",
          cursor: "pointer",
        }}
      >
        Time
      </button>
      <button
        style={{ color: status === "Done" && "red" }}
        onClick={() => setStatus("Done")}
        className={style.btn}
        type='button'
      >
        Done
      </button>
      <button
        style={{ color: status === "Important" ? "red" : "" }}
        onClick={() => setStatus("Important")}
        className={style.btn}
        type='button'
      >
        Important
      </button>
      <button
        style={{ color: status === "inProgress" ? "red" : "" }}
        onClick={() => setStatus("inProgress")}
        className={style.btn}
        type='button'
      >
        inProgress
      </button>
      <button
        style={{ color: status === "All" ? "red" : "" }}
        onClick={() => setStatus("All")}
        className={style.btn}
        type='button'
      >
        All
      </button>
    </div>
  )
}

export default Status
