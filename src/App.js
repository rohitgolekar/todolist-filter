import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './component/Form';
import Todolist from './component/Todolist'

function App() {

 // State Stuff
  const [inputtext, setInputtext] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredtodos, setfilteredtodos] = useState([]);
 
  // Run once after refresh

  useEffect(() => {
    getlocalTodos();
  }, [])


  //Useeffect
  useEffect(() => {
    filterHandler();
    savelocalTodos();
  }, [todos, status])

  // Function
  const filterHandler = () => {
    switch(status) {
      case 'completed' :
      setfilteredtodos(todos.filter((todo) => todo.completed === true ))
      break;

      case 'uncompleted' :
      setfilteredtodos(todos.filter((todo) => todo.completed === false ))
      break;

      default:
        setfilteredtodos(todos);
        break;
    }
  }
  
  //save to local storage
  const savelocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getlocalTodos = () => {
    if(localStorage.getItem("todos")=== null) {
     localStorage.setItem('todos', JSON.stringify([]));
    } else {
      const todolocal = JSON.parse(localStorage.getItem("todos", JSON.stringify(todos)));
      setTodos(todolocal);
    }
  }


  
  return (
    <>
      <div className="container p-5 my-5">
        <h3 className="text-center texy-uppercase fw-bold">Todo-list</h3>
        <Form todos={todos} setTodos={setTodos} inputtext={inputtext} setInputtext={setInputtext} setStatus={setStatus} />
        <Todolist todos={todos} setTodos={setTodos} filteredtodos={filteredtodos} />
      </div>
    </>
  );
}

export default App;
