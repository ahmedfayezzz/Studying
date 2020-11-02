import React, {useState} from 'react';
import {buyCake} from '../redux'
import {connect} from 'react-redux'

const NewCakeContainer = (props) => {
  let [number,setNumber]=useState(1)
  return ( 
    <div>
      <h2>Number of cakes: {props.numOfCakes}</h2>
      <div style={{display:"block"}}>
        <label 
          htmlFor="numCakes" 
          style={{display:"block"}}
        >
          How many cakes do you want to buy?
        </label>
        <input 
          id="numCakes" 
          type="text" 
          placeholder="How many cakes do you want to buy?"
          style={{width:"260px"}}
          onChange={(e)=>setNumber(parseInt(e.target.value))}
        />
      </div>
      <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
    </div>
   );
}

const mapStateToProps=state=>{
  return{
    numOfCakes:state.cakes.numOfCakes
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    buyCake:number=>dispatch(buyCake(number))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )
  (NewCakeContainer) ;