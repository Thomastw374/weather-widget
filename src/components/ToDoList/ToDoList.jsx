import { useState } from "react";
import ToDoListItem from "../ToDoItem/ToDoItem";
import "./ToDoList.scss"

const ToDoList = () => {
    const [toDoList, setToDoList] = useState([])
    const [toDo, setToDo] = useState("")

    const addToDo = () => {
        setToDoList(oldArray => [...oldArray, toDo])
        console.log(toDoList)
    }

    const removeCard = (index) => {
        setToDoList([...toDoList.slice(0, index), ...toDoList.slice(index + 1)]);
    }

    const handleInput = (event) => {
        setToDo(event.target.value)
    }

    const resetToDos = () => {setToDoList([])}

    const toDoListArr = toDoList.map((task, index) => {
        return (
          <>
            <ToDoListItem
              task={task}
              index={index}
              removeCard={removeCard}
            />
          </>
        );
    })

    return(
        <div className="todo-list">
            <div className="todo-list__add-item">
                <p>Task: </p>
                <input type="text" onChange={handleInput} />
                <button onClick={addToDo}>+</button>
                <button onClick={resetToDos}>Reset ToDos</button>
            </div>
            <div className="todo-list__line"></div>
            <div className="todo-list__items">
                {toDoListArr}
            </div>
        </div>
    )
}

export default ToDoList;