import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Components/HeaderComponent'
import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useNavigate  } from 'react-router-dom';
import TextTutorial from './Components/TextTutorial';


function App() {
  const[name,setName]=useState("")
   const list=(e)=>{
   setName(e)
   }
   const navigate=useNavigate()
  return (
   
     
     <div className='App'>
      
{/*<ul className='List'>

  <li>
    <Link to={"/"}>Home</Link>
  </li>
  <li>
    <Link to={"/about"}>About</Link>
  </li>
</ul>
<Routes>
  <Route path='/' element={<HeaderComponent name={name}  change={list}/>}/>
</Routes>
  */}

  <button onClick={(e)=>{
  navigate("contact")
  }}>click me</button>

     </div>
     
     

   

    
  );
}

export default App;
