import React from 'react';
import { buyIceCream } from '../redux';
import { connect } from 'react-redux';
const IceCreamContainer = (props) => {
  return ( 
    <div>
      <h2>Number of IceCreams: {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
   );
}

const mapStateToProps=state=>{
  return{
    numOfIceCreams:state.iceCreams.numOfIceCreams
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    buyIceCream:()=>dispatch(buyIceCream())
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer);