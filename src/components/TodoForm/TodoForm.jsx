import { useState,useContext } from "react";
import TodoContext from "../../context/TodoContext/TodoContext";

function AddTask() {
  const [task, setTask] = useState("");
  const {addTodo}=useContext(TodoContext);
  const taskAddHandler = (event) => {
      if(!task) return;
      addTodo(task);
      setTask("");
  };

  

  return (
    <div className="sm:w-11/12 sm:flex sm:flex-row sm:items-center  sm:gap-0">
      {/* inputBox */}
      <input
        type="text"
        placeholder="Add Your Task"
        className="w-full sm:h-10 sm:border-2 sm:my-8 rounded-l-xl sm:px-6 outline-0 border-black dark:border-slate-500 "
        value={task}
        onChange={(event) => {
          setTask(event.target.value);
        }}
      />
      {/* button */}
      <button
        className="sm:w-24 h-10 sm:font-semibold sm:text-lg sm:rounded-r-xl sm:px-2 dark:text-white sm:bg-violet-500 hover:bg-violet-600 sm:border-y-2 sm:border- dark:border-slate-500"
        onClick={taskAddHandler}
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;
