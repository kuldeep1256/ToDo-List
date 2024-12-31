import React, { useState } from "react";
import TodoItems from "./TodoItems";

function TodoList( changeMode) {
  const [tasks, settasks] = useState([])
  // here i use array coz we have so many tasks and we use state coz in this state are task will save and display on ui

  const handleSubmit = (event) => {
    let todo = event.target.todo.value
    //  from this we will get the value of todo which we write in input 
    if (tasks.includes(todo)) {
      alert("This Task is already Exist")
    } else {
      let finalList = [...tasks, todo]
      settasks(finalList)
    }
    event.preventDefault()
    // it stop the page to reload and it must when we use form
    event.target.reset();
    // it use coz we be click on submit then our content is still on input to remove that we use this
  }
  {/* Display Todo list:- 1 step*/ }
 let list=tasks.map((value, index) => {
  return(
    <li>
   <TodoItems 
   value={value}  // to passing prop because if be submit then only one value will submit if you make it variable then it will submit acutall content but make sure prop and value name should be same
   key={index} // if you are using map then it's mandartory to use key to give evey task unique number 
   tasksNumber={index}
   settasks={settasks}
   tasks={tasks}
   changeMode={changeMode}
   index={index}
   /></li>
)})


  return (
    <div  className={`p-4 rounded-lg ${
      changeMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
    }`} >

      {/* Input form */}

      <form className="flex gap-2 mb-4" onSubmit={handleSubmit}>
        {/* here we are using form coz form save the data */}
        <input
          type="text"
          name='todo'
          className={`flex-grow border p-2 rounded ${
            changeMode
              ? "bg-gray-700 text-white border-gray-600"
              : "bg-white text-black border-gray-300"
          }`}
          placeholder="Write Your Task here" />
        <button
          type="submit"
          className={`px-4 py-2 rounded ${
            changeMode
              ? "bg-gray-700 text-white hover:bg-gray-600"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}>
          <i className="fa-solid fa-floppy-disk"></i>                
        </button>
      </form>

      {/* Display Todo list:- 2 step */}
      <ul className={`list-disc pl-5 space-y-2 ${
        changeMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}>        
        {list}
      </ul>
    </div>
  );
}

export default TodoList;