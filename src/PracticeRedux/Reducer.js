export default (state,action)=>{
    switch(action.type){
     case "New_Text":
    state.text=action.text
    console.log("state"+state.text)
    return state

   
    

         default:  return state
    }
  
}