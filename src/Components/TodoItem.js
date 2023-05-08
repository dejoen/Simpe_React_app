 import React from "react";

 let TodoItem=(props)=>{
    return(
<>
{  
     
     props.myTodos.map(todo=>(
         <li key={todo.id}>
             <input type="checkbox" onChange={()=>{
                 console.log("i ma clicked")
                 props.handleChange(todo.id)

             }}/> {todo.title}
             </li>
     ))
 }
 <button onClick={()=>{
    props.addObject({id:4,title:"new task",completed:false})
}}> click todo</button>
</>
    )
 }

 export default TodoItem