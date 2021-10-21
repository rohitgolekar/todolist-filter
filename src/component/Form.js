import React from 'react'
import '../App.css'
function Form({ inputtext, setInputtext, todos, setTodos, setStatus }) {

    const inputTextHandler = (e) => {
        // console.log(e.target.value);
        setInputtext(e.target.value);
    }
   

    // submit todos
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: inputtext, completed: false, id: Math.random() * 1000 }
        ])
        setInputtext("");
    }
    
    //status handler
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <form>
                        <div className="form-group my-3">
                            <input className="form-control" type="text" value={inputtext} onChange={inputTextHandler} placeholder="Enter Task" />
                            <button className="bg-success text-white" type="submit" onClick={submitTodoHandler}>
                                <i className="fas fa-plus-square"></i>
                            </button>
                        </div>

                        <div className="form-group my-3 w-50 mx-auto">
                            <select onChange={statusHandler} className="form-select" name="filter">
                                <option value="all">All</option>
                                <option value="uncompleted">Active</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form
