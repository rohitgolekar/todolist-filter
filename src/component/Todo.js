import React from 'react'
import '../App.css'
function Todo({ text, todo, todos, setTodos }) {
    //Events

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completehandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;

        }))
    }
    return (
        <>
            <div className="todo">
                <li className={`list-group-item my-2 pb-3 ${todo.completed ? "completed" : ""}` }>{text}
                <button className="btn btn-success float-end mx-2 btn-sm" onClick={completehandler}><i className="fas fa-check"></i></button>
                <button className="btn btn-danger float-end btn-sm" onClick={deleteHandler}><i className="fas fa-trash"></i></button></li>
            </div>
        </>
    )
}

export default Todo
