import React from "react";
import {createStore} from "redux"
import Reducer from "./Reducer";
import Store from "./Store";

const initialState={tech:"hello tis is redux"}
const store=createStore(Reducer,initialState)
const cog= Store

let ReduxComponent=()=>{
    let dispatchAction=()=>{
       cog.dispatch({type:"New_Text",
     text:"i have changed now"}) 
     }
    return(
        <div>
  {cog.getState().text}

  <button onClick={()=>{
          cog.dispatch({type:"New_Text",
          text:"i have changed now"}) 
  }}> click</button>
  
        </div>
    )
}

export default ReduxComponent