
import { useState } from 'react'
import './App.css'
import ModolFrom from './components/ModolFrom'

function App() {
   
  const [todos, setTodos] = useState([])
  const [isModelopen, setIsModelOpen] = useState(false)
  const [eiditingTab, setEditingTab] = useState(null) 

  const openAdd = () =>{
      setIsModelOpen(true)
       setIsModalOpen(true)
  }


  // Handle the Todo ADDING
  const handleAddTodo = (title) => {
    const newTodo = {
      id: crypto.randomUUID(),
      // title: title,
      // Shorthand Property
      title,
      createdAt: Date.now()   // Not Necessary in this Project
    }
    // [].push(newTodo)
    setTodos(prevTodos => [
      ...prevTodos,
      newTodo
    ]);
    // Close the Modal
    setIsModalOpen(false);
  }

  const openEdit = todo => {
    setIsEditingTodo(todo);
    setIsModalOpen(true);
  }







  return(
       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-3xl mx-auto">

        {/*title and submit button*/}
        <div className="text-center">
          <h1 className="text-3xl font-bold my-5">
            Todo Application
          </h1>

          <button
            onClick={openAdd}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 my-5 rounded-xl"
          >
            Add a Todo
          </button>
        </div>

        <ModolFrom 
        
        isOpen = {isModelopen}
        onClose = {()=> setIsModelOpen(false)}
        />
      </div>
    </div>
    ) 


}

export default App
