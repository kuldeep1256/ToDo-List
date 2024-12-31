import React, { useState } from "react";
import TodoList from "./TodoList";


function App() {
  //  Changing Mode 
  const [changeMode, setChangeMode] = useState(false)
  const toggleMode = () => {
    setChangeMode(!changeMode)
  }
  return (
    <div
      className={`min-h-screen flex items-center justify-center ${changeMode ? 'bg-slate-800 text-white' : ''}`}
      style={{
        background: changeMode ?
          "linear-gradient(to right, #1e293b, #0f172a)"
          : "linear-gradient(to right, #0A2647, #144272)",
      }}

    > <div className={`container mx-auto p-6 rounded-lg shadow-lg max-w-3xl ${changeMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-center mb-6" style={{ color: changeMode ? "#ffffff" : "#0A2647" }} >✨ Task Tracker 🚀</h1>
        {/* toggle Button */}
        <button
          onClick={toggleMode}
          className={`mb-4 px-4 py-2 rounded gap-2 ${changeMode
              ? 'bg-gray-700 text-white hover:bg-gray-600'
              : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}><i
            className={`${
              changeMode ? "fa-solid fa-sun" : "fa-solid fa-moon"
            }`}
          ></i>  {changeMode ? "Light Mode" : "Dark Mode"}
        </button> </div>
        <TodoList changeMode={changeMode} />
      </div>
    </div>
  );
}

export default App;