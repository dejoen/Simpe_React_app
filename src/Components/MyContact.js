import React,{useState} from "react"
import { moderate, scaleHeight, scaleWidth } from "./CalculateAndScale"



let MyContact=()=>{
    const[windowMetrics,setWindowMetrics]=useState({height:window.innerHeight,width:window.innerWidth})
    window.addEventListener("change",(e)=>{
       setWindowMetrics({height:window.innerHeight,width:window.innerWidth})
    })
    return(

            <div className="Container" style={{display:"flex",justifyContent:"center",background:"violet",height:windowMetrics.height ,width:windowMetrics.width, alignItems:"center"}}>
              
              <div className="Container-div1" style={{
                   textAlign:"center",
                    width:scaleWidth(windowMetrics.width,300),
                    height:scaleHeight(windowMetrics.height,400),
                    borderRadius:15,
                    borderStyle:"solid",
                    borderWidth:1,
                    borderColor:"cyan",
                    margin:10,
                    background:"white"
                   
                   
                
                    
                     

                }}>
                kfkkfkk  contact
                </div>
            </div>
      
    )
}


export default MyContact