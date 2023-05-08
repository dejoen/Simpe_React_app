import React,{useState} from 'react'
import  '../DesignFolder/HeaderCompDesign.css'



const HeaderComponent=(props)=>{
  props.change("i am joe")
    return(
<div className='HeaderComponent'>
   <form>
    <label>{" "}
  {props.name}
    </label>
   </form >
   
  </div>


    );
}


export default HeaderComponent

