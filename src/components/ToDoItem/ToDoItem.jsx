import { useState } from "react";
import "./ToDoItem.scss"

const ToDoListItem = ({task, index, removeCard}) => {
    const [isCompletedTask, setIsCompletedTask] = useState(false)

    const handleTaskCheck = () => {
        setIsCompletedTask(!isCompletedTask)
    }

    return (
      <div className="todo">
        <div className="todo__check-task">
          <input onClick={handleTaskCheck} className="todo__checkbox" type="checkbox" />
          <p className={`todo__task-text todo__task-text${isCompletedTask ? "--strikethrough" : ""}`}>{task}</p>
        </div>
        <button
          className="todo__remove-button"
          onClick={() => removeCard(index)}
        >
          x
        </button>
      </div>
    );
}

export default ToDoListItem;