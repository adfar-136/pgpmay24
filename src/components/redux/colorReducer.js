const colorReducer = (state={backgroundColor:"red"},action)=>{
   switch(action.type){
    case "change":
        return {backgroundColor:action.payload};
    default:
        return state
   }
}
export default colorReducer;