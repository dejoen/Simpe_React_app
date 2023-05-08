import React, {useState,useEffect} from "react";
import "../DesignFolder/CompPract.css"


let fetchUsers=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
        resolve({name:"joe",id:"3443"})
           },1000)
      })
}


let PracticeCom=()=>{
 
 const [user,setUsers]=useState({name:"jiebg"})
 
  return(
    <>
        <div className="Container">
       <NavCopmponent/>
       <Body />
        <Footer/>
       
       
        </div>
       
        </>
    )
}

let Text=(props)=>{
    return(
        <>
        <p className="myPar">{props.text}</p>
         </>
    )
}


let NavCopmponent =()=>{
    return(
        <div className="Nav_Con">
    <p> <h1>Welcome To Code Camp</h1></p>
    <div>
    <img className="myImage" src={
            require("../ImagesFolder/musixcloudicon.jpg")
         } alt="kd"/>
    </div>
  
   
     <p><h5>Let make programming fun and easy</h5></p>
        </div>
    )
}

let Footer=()=>{
    return(
        <div className="Footer">
footer
  <Text text="more"/>
  <Text text="link"/>
  <Text text="share"/>
  <SearchBar />
        </div>
    )
}


let SearchBar=()=>{
    return(
        <input  className="search"    type={"search"} placeholder={"search me"} onChange={
            (e)=>{
            console.log(e.target.value)
            }
        }/>
    )
}

let Body=()=>{
    return(
        <div className="Body">
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Text text="hhshhsh"/>
<Icon/>
        </div>
    )
}

let Icon=()=>{
    return(
        <div className="Icon">
hhhhhhs
        </div>
    )
}
export default PracticeCom