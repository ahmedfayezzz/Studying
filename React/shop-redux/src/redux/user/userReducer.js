export const FETCH_USER_REQUEST='FETCH_USER_REQUEST'
export const FETCH_USER_FAILURE='FETCH_USER_FAILURE'
export const FETCH_USER_SUCCESS='FETCH_USER_SUCCESS'

const initialState={
  isLoading:true,
  users:[],
  error:''
}

const userReducer=(state=initialState,action)=>{
  switch(action.type){
    case FETCH_USER_REQUEST:
      return{
        ...state,
          isLoading:true
      }
    case FETCH_USER_SUCCESS:
      return{
        ...state,
          isLoading:false,
          users:action.payload,
          error:''
      }
    case FETCH_USER_FAILURE:
      return{
        isLoading:false,
          users:[],
          error:action.payload
      }
    default: return state
  }
}

export default userReducer