import './App.css';
import React,{useState, useEffect} from 'react';
import {fetchTasks} from './api'


function App() {

  
  const [value, setValue]=useState("")
  //console.log('app se renderiza')

  const [tasks, setTasks]= useState([])
  //console.log(tasks);

  useEffect(()=>{

    fetchTasks()
    .then((res)=>{
      setTasks(res.data)
    
    })
     .catch((err)=>{
       console.log(err);
     })

  },[])

  const addTask=()=>{
    console.log('agrega la tarea', value)

    //
    setTasks(tasks.concat({
      _id: "6239485c0efc759f3591e238" + Math.floor(Math.random() * 10),
      text: value 
    }))
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="task-input__container">
        <div className="task-input">
           <input 
           type="text" 
           className="task-input__text" 
           value={value}
           placeholder= "Ingresa la tarea"
           onChange={(e)=>{  
            setValue(e.target.value)
           }}
           />
          </div>
          <button 
          onClick={addTask} 
          className="task-input__btn"
          >
          Ingresar Tarea
          </button>    
        </div>
        
        {tasks.map( (task)=> {
          return(
            <div key={task._id} className="task">
              <p>{task.text} </p>

            </div>
          )
        })}
       
      </header>
    </div>
  );
}

export default App;
