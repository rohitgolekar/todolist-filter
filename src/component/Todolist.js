import React from 'react'
import Todo from './Todo'
function Todolist({todos, setTodos, filteredtodos}) {
    // console.log(todos);

    
    return (
        <>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <ul className="list-group">
                        {
                            filteredtodos.map(todo => (
                                <Todo todos={todos} setTodos={setTodos} text={todo.text} key={todo.id} todo={todo} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Todolist
