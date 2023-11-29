import { useState,useEffect } from "react";
import TodoContext from "./context/TodoContext/TodoContext";
import {TodoItem,TodoForm} from "./components";

function App() {
  const [todos,setTodos]=useState([]);
 
  const addTodo=(todo)=>{
    setTodos((prev)=>[...prev,{id:Date.now(),todo:todo,completed:false}])
  }
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?{...prevTodo,todo:todo}:prevTodo)))
  }
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }
  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((todo)=>todo.id===id?{...todo,completed: !todo.completed }:todo))
  }

  useEffect(()=>{
    const todosData=JSON.parse(localStorage.getItem("todos"));
    if( todosData && todosData.length>0) setTodos(todosData)
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos,setTodos])
  return (
   <TodoContext.Provider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="h-screen bg-blue-900">
    <div className="sm:w-screen sm:flex sm:flex-col sm:py-6 sm:justify-evenly sm:items-center bg-white dark:bg-blue-900">
      {/* heading starts Here ---> */}
      <h1 className=" font-bold text-5xl text-black dark:text-white">
        Manage Your Todos
      </h1>
        <TodoForm/>
      <div className="sm:w-full sm:flex sm:flex-col sm:justify-evenly " >
        {
          todos.map((todoItem)=>(
            <div key={todoItem.id}
            className='w-full' > 
            <TodoItem id={todoItem.id} todo={todoItem.todo} completed={todoItem.completed}  />
            </div>
          ))}
      </div>      
    </div></div>
    </TodoContext.Provider>
  );
}

export default App;
