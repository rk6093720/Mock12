

import * as types from "./action";

const initialState = {
    job:[],
    filters:[],
    isLoading:false,
    isError:false,
}

const reducer = (state = initialState,action) => {
    const { type, payload}=action;
  switch (type) {

  case types.JOB_FROM_REQUEST:{
    return { 
        ...state, 
        isLoading:true,
     }
  }
    
  case types.JOB_FROM_SUCCESS:{
    return { 
        ...state, 
        isLoading:false,
        job:payload,
        isError:false
     }
  }
  case types.JOB_FROM_FAILURE:{
    return { 
        ...state, 
        isLoading:false,
        job:"",
        isError:true
     }
  }
  case types.GET_FROM_REQUEST:{
    return { 
        ...state, 
        isLoading:true,
     }
  }
    
  case types.GET_FROM_SUCCESS:{
    return { 
        ...state, 
        isLoading:false,
        job:payload,
        isError:false
     }
  }
  case types.GET_FROM_FAILURE:{
    return { 
        ...state, 
        isLoading:false,
        job:"",
        isError:true
     }
  }

  case types.GET_JOB_REQUEST:{
    return { 
        ...state, 
        isLoading:true,
     }
  }
    
  case types.GET_JOB_SUCCESS:{
    return { 
        ...state, 
        isLoading:false,
        job:payload,
        isError:false
     }
  }
  case types.GET_JOB_FAILURE:{
    return { 
        ...state, 
        isLoading:false,
        job:"",
        isError:true
     }
  }
  case types.FILTER_PRODUCT:
    return { ...state, filters:payload };
  default:
    return state
  }
}

export { reducer}