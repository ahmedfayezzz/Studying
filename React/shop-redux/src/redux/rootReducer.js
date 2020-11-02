import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import userReducer from './user/userReducer';

import { combineReducers } from 'redux';

const rootReducer=combineReducers({
  cakes:cakeReducer,
  iceCreams:iceCreamReducer,
  users:userReducer
})

export default rootReducer