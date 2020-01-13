import {INCREMENT,DECREMENT,SUCCESS,REDIRECT} from './Constant'

//Create a Reducer
const initState={
    count:0,
    data:[],
    title:''
}
export default function Reducer(state=initState,action){
    //console.log(state)
    switch(action.type){
        case INCREMENT:    
            return{                  
                ...state,
                count: state.count+1                    
            }
        case DECREMENT:
            return{ 
                ...state,
                count:state.count-1
            }
        case REDIRECT:
            return{
                ...state,
             redirectStatus:true   
            }
        case SUCCESS:
            console.log("API CALL RSPONSE");
            console.log(state)
            console.log(action);
            return{ 
                ...state,
                data:action.movies,
                title:action.title
            }
        
        default:
            return state;
    }
}
