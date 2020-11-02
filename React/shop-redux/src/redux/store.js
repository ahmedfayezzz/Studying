import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger'
import thunk from 'redux-thunk'

// import logger from '/node_modules/redux-logger/dist/redux-logger.js'

import rootReducer from './rootReducer';



// const store = createStore(rootReducer,applyMiddleware)  
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store