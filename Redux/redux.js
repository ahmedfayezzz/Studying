const redux=require('redux')
// const reduxLogger=require('redux-logger')

const createStore=redux.createStore
const combineReducers=redux.combineReducers
const applyMiddleware=redux.applyMiddleware
// const logger = reduxLogger.createLogger()

const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'
buyCack=()=>{
  return(
    {
      type:BUY_CAKE,
      info: 'first redux action'
    }
  )
}

buyIceCream=()=>{
  return(
    {
      type:BUY_ICECREAM,
    }
  )
}

// const initialState={
//   numOfCackes:10
// }
const initialCackesState={
  numOfCackes:10
}
const initialIceCreamsState={
  numOfIceCreams:10
}
// const reducer = (state=initialState,action)=>{
//   switch(action.type){
//     case BUY_CAKE:
//       return{
//         ...state,
//           numOfCackes:state.numOfCackes-1
//       }
//     default:
//       return state
//   }
// }
const iceCreamReducer = (state=initialIceCreamsState,action)=>{
  switch(action.type){
    case BUY_ICECREAM:
      return{
        ...state,
          numOfIceCreams:state.numOfIceCreams-1
      }
    default:
      return state
  }
}

const cackesReducer = (state=initialCackesState,action)=>{
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
function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}
const rootReducer = combineReducers({
  cake:cackesReducer,
  iceCream:iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
// console.log('Initial state:', store.getState())
//here we subscribe to the store so that a function 
//would be called each time an action is dispatched to the store.
//returned function from store.subscribe unsubscribes when called
const unsubscibe = store.subscribe(()=>{})
console.log("1")
store.dispatch(buyCack())
console.log("2")
store.dispatch(buyCack())
console.log("3")
store.dispatch(buyCack())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())

unsubscibe()