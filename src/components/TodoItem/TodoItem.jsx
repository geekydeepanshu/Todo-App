import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext/TodoContext";

function TodoItem({id,todo,completed}) {
  const { updateTodo, deleteTodo, toggleComplete } = useContext(TodoContext);
  const[isModificationState,setIsModificationState]=useState(false);
  const [todoText,setTodoText]=useState(todo);

  const checkboxHandler=()=>{
        toggleComplete(id);
    }

  const todoEditHandler=()=>{
        setIsModificationState((prev)=>!prev);
        updateTodo(id,todoText);
    
  }

  const todoDeleteHandler=()=>{
        deleteTodo(id);
  }

  return (
    <div className={`sm:w-9/12 sm:h-12 mx-auto sm:my-2 sm:rounded-xl  sm:px-3 ${completed?"dark:bg-green-300":" dark:bg-pink-300"} sm:flex-row sm:flex sm:gap-x-10 sm:items-center`}>
      <input type="checkbox"
      checked={completed}
      onClick={checkboxHandler} />

      {isModificationState ? (
        <input
          type="text"
          className={` w-3/4 sm:h-8  px-4 border-none outline-none  dark:bg-inherit text-xl tracking-wide`}
          value={todoText}
          
          onChange={(event)=>{
            setTodoText(event.target.value)
          }}

        />
      ) : (
        <span className={`${completed?("line-through"):""} text-xl tracking-wide w-3/4`}>{`${todoText}`}</span>
      )}
      <button 
        className={`sm:w-10 sm:h-7 rounded-lg bg-white`}
        disabled={completed}
        onClick={todoEditHandler}>{isModificationState?"📁" : "✏️"}</button>
      <button 
        className={`sm:w-10 sm:h-7 rounded-lg bg-white `}
      onClick={todoDeleteHandler}>❌</button>
    </div>
  );
}

export default TodoItem;
