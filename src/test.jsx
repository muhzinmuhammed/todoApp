import './App.css';
import { useState } from 'react';
function App() {
  const [todos,setTodos]=useState([])
  const [todo,setTodo]=useState('')
  const date = new Date();
  const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
 
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        
        <h2>Whoop, it's {dayName} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊 Add item..." />
        <i onClick={()=>setTodos([...todos,{id:Date.now(),text:todo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
       { todos.map((value)=>{
        return (<div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked);
              console.log(value);
              setTodos(todos.filter(obj=>{
                if(obj.id===value.id){
                  obj.status=e.target.checked
                }
                return obj
              }))
            }} value={value.status} type="checkbox" name="" id="" />
            <p style={value.status ? {textDecoration: 'line-through'}:{}}>{value.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>)
         })}

       

        { todos.map((obj)=>{
          if(obj.status){
            return( <h1>{obj.text}</h1> )
          }
          return null
         })}
      </div>
    </div>
  );
}

export default App;



