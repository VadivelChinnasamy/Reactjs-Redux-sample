import {INCREMENT,DECREMENT,APICALL, SUCCESS,REDIRECT} from './Constant'

//Create an action
export const  getIncAction=()=>({   
        type:INCREMENT,
        info:"just INCREMENT the value"  
});
export const getDecAction=()=>({ 
        type:DECREMENT,
        info:"just DECREMENT the value"    
});

export const getAPIcall=()=>({ 
    type:APICALL,
    info:"just APICALL the value"    
});
export const SuccessResponse=(json)=>({ 
        type:SUCCESS,
        response: json.movies,
 
    });

    export const rediectStatus=()=>({
        type:REDIRECT,
        redirectStatus:false,    

    });
    


// export const fetchProductsBegin = () => ({
//     type: FETCH_PRODUCTS_BEGIN
//   });
  