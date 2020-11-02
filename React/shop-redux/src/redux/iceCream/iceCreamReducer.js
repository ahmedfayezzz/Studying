import { BUY_ICECREAM } from './actionTypes';

const initialState={
  numOfIceCreams:25
}

const iceCreanReducer=(state=initialState, action)=>{
  switch(action.type){
    case BUY_ICECREAM:
      return{
        ...state,
          numOfIceCreams:state.numOfIceCreams-1
      }
    default: return state
  }
}

export default iceCreanReducer