import React, { useState,useRef } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState('');
  const inputRef=useRef('')

  const handleAddTodo = () => {
    if (toDo.trim() === '') return; // Prevent adding empty tasks
 const inputValue=inputRef.current.value;
 
    setToDos([...toDos, { id: Date.now(), text: inputValue, status: false }]);
    
    setToDo(''); // Clear the input after adding the task
  };

  const handleDeleteTodo = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

 

  const handleEditTodo = (id) => {
    const todoToEdit = toDos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setEditingId(id);
      setEditedText(todoToEdit.text);
    }
  };

  const handleSaveTodo = (id) => {
    const todoToSave = toDos.find((todo) => todo.id === id);
    if (todoToSave) {
      todoToSave.text = editedText;
      setEditingId(null);
      setEditedText('');
    }
  };

  

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          ref={inputRef}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊 Add item..."
        />
        <i onClick={handleAddTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => (
          <div className="todo" >
            <div className="left">
            <input onChange={(e)=>{
             
              setToDos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))
            }} value={obj.status} type="checkbox" name="" id="" />

              {editingId === obj.id ? (
                <input
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
              ) : (
                <p style={obj.status ? { textDecoration: 'line-through' } : {}}>
                  {obj.text}
                </p>
              )}
            </div>
            <div className="right">
              {editingId === obj.id ? (
                <i
                  className="fas fa-check"
                  onClick={() => handleSaveTodo(obj.id)}
                ></i>
              ) : (
                <i
                  className="fas fa-edit"
                  onClick={() => handleEditTodo(obj.id)}
                ></i>
              )}
              <i
                onClick={() => handleDeleteTodo(obj.id)}
                className="fas fa-times"
              ></i>
            </div>
           

          </div>
        ))}
            
      </div>
    </div>
  );
}

export default App;
