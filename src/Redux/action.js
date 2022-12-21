 import axios from "axios"
export const JOB_FROM_REQUEST = "JOB_FORM_REQUEST";
export const JOB_FROM_SUCCESS = "JOB_FORM_SUCCESS";
export const JOB_FROM_FAILURE = "JOB_FORM_FAILURE";
export const GET_JOB_REQUEST = "GET_JOB_REQUEST";
export const GET_JOB_SUCCESS = "GET_JOB_SUCCESS";
export const GET_JOB_FAILURE = "GET_JOB_FAILURE";
export const GET_FROM_REQUEST = "GET_FORM_REQUEST";
export const GET_FROM_SUCCESS = "GET_FORM_SUCCESS";
export const GET_FROM_FAILURE = "GET_FORM_FAILURE";

export const FILTER_PRODUCT = "FILTER_PRODUCT";

const getJobfrom =(payload)=>(dispatch)=>{

  dispatch({ type: JOB_FROM_REQUEST})
  return  axios.post("https://masaijob.onrender.com/job", payload)
  .then((r)=>{
    console.log(r.data);
    return dispatch({ type:JOB_FROM_SUCCESS, payload:r.data })
  })
  .catch((e)=>{
    dispatch({type:JOB_FROM_FAILURE, payload:e})
  })

}

export const getJob =()=>(dispatch)=>{

  dispatch({ type: GET_JOB_REQUEST})
  return  axios.get("https://masaijob.onrender.com/job")
  .then((r)=>{
    console.log(r.data);
    return dispatch({ type:GET_JOB_SUCCESS, payload:r.data })
  })
  .catch((e)=>{
    dispatch({type:GET_JOB_FAILURE, payload:e})
  })

}
const getJobfromData =(value)=>(dispatch)=>{

    dispatch({ type: GET_FROM_REQUEST})
    return  axios.get(`https://masaijob.onrender.com/job?q=${value}`)
    .then((r)=>{
      console.log(r.data);
      return dispatch({ type:GET_FROM_SUCCESS, payload:r.data })
    })
    .catch((e)=>{
      dispatch({type:GET_FROM_FAILURE, payload:e})
    })
  
  }
  export const filterProduct = (data) => {
    console.log(data);
    return {
      type: FILTER_PRODUCT,
      payload: data,
    };
  };
export {getJobfrom, getJobfromData}