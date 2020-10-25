const redux=require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const reduxLogger=require('redux-logger')

const createStore=redux.createStore
const combineReducers=redux.combineReducers
const applyMiddleware=redux.applyMiddleware
const logger = reduxLogger.createLogger()

//actions 
const FETCH_USER_REQUEST='FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS='FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE='FETCH_USER_FAILURE'
// action creators
const fetchUserRequest=()=>{
  return {
    type:FETCH_USER_REQUEST
  }
}
const fetchUserSuccess=(users)=>{
  return {
    type:FETCH_USER_SUCCESS,
    payload:users
  }
}
const fetchUserFailure=(error)=>{
  return {
    type:FETCH_USER_FAILURE,
    payload:error
  }
}

// initializing state and creating store
const initialState={
  loading:true,
  users:[],
  error:''
}
const reducer=(state=initialState,action)=>{
  switch(action.type){
    case FETCH_USER_REQUEST:
      return{
        ...state,
          loading:true
      }
    case FETCH_USER_SUCCESS:
      return{
        ...state,
          loading:false,
          users:action.payload,
          error:''
      }
      case FETCH_USER_FAILURE:
      return{
        ...state,
          loading:false,
          users:[],
          error:action.payload
      }
  }
}
const fetchUsers=()=>{
  return function(dispatch,getState){
    dispatch(fetchUserRequest)
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response=>{
        const users=response.data.map(user=>user.id)
        dispatch(fetchUserSuccess(users))
      })
      .catch(error=>{
        dispatch(fetchUserFailure(error))
      })
  }
}

const store = createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{})
store.dispatch(fetchUsers())
// console.log(store.dispatch(fetchUserFailure()))