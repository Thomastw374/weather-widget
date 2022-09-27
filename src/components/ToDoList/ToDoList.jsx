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

    return (
      <div className="todo-list">
        <div className="todo-list__inputs">
          <div className="todo-list__text-input">
            <p>Task: </p>
            <input className="todo-list__input" type="text" onChange={handleInput} />
          </div>
          <div className="todo-list__buttons">
            <button className="todo-list__button" onClick={addToDo}>
              +
            </button>
            <button className="todo-list__button" onClick={resetToDos}>
              Reset
            </button>
          </div>
        </div>
        <div className="todo-list__line"></div>
        <div className="todo-list__items">{toDoListArr}</div>
      </div>
    );
}

export default ToDoList;