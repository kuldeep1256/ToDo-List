import React, { useState } from 'react'

function TodoItems({ 
  value, 
  index, 
  tasksNumber, 
  tasks, 
  settasks, 
  changeMode }) {

  const handleDelete = () => {

    let finalData = tasks.filter((v, i) => i != tasksNumber)   // i!tasknumber mean like in UI html css js i select js then it will print only html and css it filter which select
    settasks(finalData)
  }

  const [isComplete, setIsComplete] = useState(false)
  const statusCheck = () => {
    setIsComplete(!isComplete)
  }

  const [editMode, setEditMode] = useState(false)
  const [editValue, setEditValue] = useState(value)

  const handleEdit = () => {
    if (editMode) {
      let update = tasks.map((tasks, i) => (i === tasksNumber ? editValue : tasks))
      settasks(update)
    } setEditMode(!editMode)
  }

  

  return (
    < >
      {/* Making Task */}
      <li className={`flex justify-between items-center rounded p-2 shadow-md ${
        changeMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
      }`}>

        {/* To Print Task */}
        {editMode ? (
          <input
            type='text'
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className={`border p-1 rounded ${
            changeMode
              ? "bg-gray-600 text-white border-gray-500"
              : "bg-white text-black border-gray-300"
          }`}
          />
        ) : (
          <span
            onClick={statusCheck}
            className={`text-lg font-medium cursor-pointer ${isComplete
              ? 'line-through bg-green-200 text-black' : ""
             }`}
          >{tasksNumber + 1}. {value}
          </span>
        )}

        <div className="flex items-center space-x-2">
          {/* Complete or pending status button */}
          <button 
          onClick={statusCheck}
          className={` p-2 w-10 h10 rounded flex items-center justify-center ${changeMode
            ? "bg-gray-700 text-white"
            : "bg-[#0A2647] text-white"
          }`} ><i className={`fa-solid ${isComplete ? "fa-toggle-on": "fa-toggle-off"}` }></i> 
          </button>
          {/* printing completed or pending with icon */}
        {/* edit button */}
          <span className={`text-sm ${isComplete
          ? 'text-green-500'
          :"text-red-500"}`}>
            {isComplete? "Completed🎉": "Pending⏳"}
          </span>

          <button
            onClick={handleEdit}
            className={`p-2 w-10 h-10 rounded flex items-center justify-center hover:bg-yellow-500 ${changeMode
              ? "bg-gray-700 text-white"
              : "bg-[#0A2647] text-white " }`} 
          ><i className="fa-solid fa-pen-to-square "></i>
           </button>
          
          {/* delete button */}
          <button
            className={` p-2 w-10 h-10 rounded flex items-center justify-center hover:bg-orange-600 ${changeMode
              ? "bg-gray-700 text-white"
              : "bg-[#0A2647] text-white " } `}
            onClick={handleDelete}
          > <i className=" fa-solid fa-trash"> </i> </button>
        </div>
      </li>

    </>
  )
}

export default TodoItems