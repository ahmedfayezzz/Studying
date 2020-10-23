const redux=require('redux')
const createStore=redux.createStore

const BUY_CAKE='BUY_CAKE'
buyCack=()=>{
  return(
    {
      type:BUY_CAKE,
      info: 'first redux action'
    }
  )
}

const initialState={
  numOfCackes:10
}

const reducer = (state=initialState,action)=>{
  switch(action.type){
    case BUY_CAKE:
      return{
        ...state,
          numOfCackes:state.numOfCackes-1
      }
    default:
      return state
  }
}

const store = createStore(reducer)
console.log('Initial state:', store.getState())
//here we subscribe to the store so that a function 
//would be called each time an action is dispatched to the store.
//returned function from store.subscribe unsubscribes when called
const unsubscibe = store.subscribe(()=>console.log('updated state:', store.getState()))

store.dispatch(buyCack())
store.dispatch(buyCack())
store.dispatch(buyCack())

unsubscibe()

