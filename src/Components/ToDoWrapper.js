import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import './ToDoWrapper.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ToDoWrapper=()=> {
  const[task,setTask]=useState(""); 
  const[todoList,setTodoList]=useState([]);  //list of tasks that you want to display
 //Single task
  
 const newTask={
  id:uuidv4(),
  name:task,
  completed:false
  
}


  const handleChange=(event)=>
  {
    event.preventDefault();
    setTask(event.target.value);
  }


  const displayList=()=>
  {
    setTodoList([...todoList,newTask]);
  }


  const deleteTask=(id)=>
  {
    setTodoList(todoList.filter((task)=>task.id !== id
    ));
  }

  
  return (
    <div className="container">
    <div className="row">
      <h2>To-Do List</h2>
      <div className="todo-input-form">
  
      
      <div className="wrapped">
        <input type="text" placeholder="What task do you have in mind today?" onChange={handleChange}/>
        <button type="submit" className="add-task-btn" onClick={displayList}>Add Task</button>
        </div>
      
      
      <div className="tasknames">        
      {todoList.map((singletask)=>
        {
           return(<div className="eachTask"><p>{singletask.name}
           <FontAwesomeIcon icon={faTrash} className="deleteicon" onClick={()=>deleteTask(singletask.id)}/>

           </p>
           
           </div>);      

        })
      }
      </div>




 
      </div>
    
      
     
     </div>
     </div>
  )
}

export default ToDoWrapper;