import {FETCH_USER_REQUEST,FETCH_USER_FAILURE,FETCH_USER_SUCCESS} from './actionTypes'
import axios from 'axios'

export const fetchUserRequest=()=>{
  console.log('loading...')
  return{
    type:FETCH_USER_REQUEST
  }
}
export const fetchUserSuccess=(users)=>{
  console.log('success')
  return{
    type:FETCH_USER_SUCCESS,
    payload:users
  }
}
export const fetchUserFailure=(error)=>{
  console.log('failure')
  return{
    type:FETCH_USER_FAILURE,
    payload:error
  }
}

export const fetchUsers=()=>{
  return (dispatch)=>{
    dispatch(fetchUserRequest)
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response=>{
        const users = response.data
        dispatch(fetchUserSuccess(users))
      })
      .catch(error=>{
        const errorMsg = error.message
        dispatch(fetchUserFailure(errorMsg))
      })
  }

  
}