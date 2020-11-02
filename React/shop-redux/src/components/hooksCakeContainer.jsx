import React from 'react';
import {useSelector,useDispatch} from 'react-redux'

import {buyCake} from '../redux'

const HooksCakeContainer = (props) => {
  const numOfCakes=useSelector(state=>state.cakes.numOfCakes)
  const dispatch=useDispatch()
  return ( 
    <div>
      <h2><i>*hooks*</i> Number of cakes: {numOfCakes}</h2>
      <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
   );
}


export default HooksCakeContainer ;