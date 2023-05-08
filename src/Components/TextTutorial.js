import React,{useState,useEffect} from "react";



let TextTutorial=()=>{
const [names,setName]=useState({
    fname:"",
    lname:"",
    message:"",
    carBrand:"",
    isChecked:false,  
    range:0,  
})

let handleEvent=(e)=>{
    let target= e.target.type==="checkbox"? e.target.checked :e.target.value
 setName({
    ...names,
    [e.target.name]:target,
 })
}

 return(
    <>
    <form>
        <label> {" "}
           FirstName:<input type="text" placeholder="enter name" name="fname" value={names.fname} onChange={
           handleEvent
           } style={{
           outline:'blue',
           width:"20%",
           height:"5vh",
           margin:20,
           borderRadius:5,
           }}/>
        </label>{" "}
        <br/>
        <br/>
        <label>
        LastName:<input type="text" placeholder="enter name" name="lname" value={names.lname} onChange={
           handleEvent
           }/> 
           
        </label>
        <br/>
        enter message
        <br/>
        <textarea  name="message" onChange={handleEvent} value={names.message}
        />
         <br/>
       pick item
        <br/>
        <select name="carBrand" value={names.carBrand} onChange={handleEvent} >
   <option>Venza</option>
   <option>Benz</option>
   <option>ben</option>
   <option>Ven</option>
   <option>Venz</option>
        </select>
        <br/>
        <input  type="checkbox" name="isChecked" checked={names.isChecked} onChange={handleEvent}/>
        <input type="radio" name="Radio"    />
        <input type="range" min='0' max="100" name="range" value={names.range} onChange={handleEvent} />
    </form>
    <h1>{names.fname +"  " +names.lname}</h1>
    <p>{names.message}</p>
    <p>{names.carBrand}</p>
    <p>{names.isChecked?"yes":"no"}</p>
    <p>{names.range}</p>
    </>
 )
}

export default TextTutorial