import React, { useState } from 'react'

function TodoItems({ value, index, tasksNumber, tasks, settasks, changeMode }) {

  const handleDelete = () => {

    let finalData = tasks.filter((v, i) => i != tasksNumber)   // i!tasknumber mean like in UI html css js i select js then it will print only html and css it filter which select
    settasks(finalData)
  }

  const [light, setLight] = useState(false)
  const statusCheck = () => {
    setLight(!light)
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
            className={`text-lg font-medium cursor-pointer ${light
              ? 'line-through'
              : changeMode
              ? "text-white"
              : "bg-black"
             }`}
          >{tasksNumber + 1}. {value}
          </span>
        )}

        {/* edit button */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleEdit}
            className={`p-2 w-10 h-10 rounded flex items-center justify-center hover:bg-yellow-500 ${changeMode
              ? "bg-gray-700 text-white"
              : "bg-[#0A2647] text-white " }`} 
          ><i className="fa-solid fa-pen-to-square "></i> </button>
          
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