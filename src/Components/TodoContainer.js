import React,{useState} from "react";
import TodoItem from "./TodoItem";



let TodoContainer =()=>{
    const [todos,setTodos]=useState([{
        id:1,
        title:"read the basics",
        completed:false,
    },{
        id:2,
        title:"practice",
        completed:false,
    },
    {
        id:3,
        title:"build project",
        completed:false,
    }]
    )

     const performAction=(item)=>{
        setTodos([...todos,item])
     }
   const onChangeM=(id)=>{
    setTodos(todos.map(todo=>{
        if(todo.id === id){
            todo.completed=!todo.completed
        }
        return todo
       }))
  console.log("am changing now"+id)
  console.log(todos)
   }
    return(

  <>
 { <TodoItem myTodos={todos} handleChange={onChangeM} addObject={performAction}/>}
 
   <button onClick={()=>{
    let y={id:4,title:"hhhh",completed:false}
      setTodos([...todos,y])
     
   }}>add item</button>
</>
 
    )
}
export default TodoContainer