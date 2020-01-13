
import {SUCCESS} from './Constant'
const QUOTE_REQUESTED = "QUOTE_REQUESTED";


export const  getApiCall=()=> {
    return function(dispatch) {
      dispatch({
        type: QUOTE_REQUESTED,
      });
      console.log("Call Fetch ");
       fetch("https://facebook.github.io/react-native/movies.json").then(res => res.json())
      .then(data=>{
          //dispatch(SuccessResponse(data)); OR
        dispatch({          
            type: SUCCESS,
            title: data.title,
            movies: data.movies
          });
      });

    }
}

    // fetch("https://facebook.github.io/react-native/movies.json")
    //   .then(response => response.json())     
    //   .then(data => dispatch({          
    //       type: SUCCESS,
    //       response: data.movies
    //     }))
        
    //   .catch(error => dispatch({
    //       type: QUOTE_FAILED,
    //       response: error
    //     })
    //   );
 