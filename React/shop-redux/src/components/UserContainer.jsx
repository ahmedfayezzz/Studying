import React,{useEffect} from 'react';
import {fetchUsers} from '../redux'
import { connect } from 'react-redux';
const UserContainer = ({userData,fetchUsers}) => {
  useEffect(()=>{
    fetchUsers()
  },[])
  return userData.isLoading ?( 
    <h1>loading...</h1>
   )
   :userData.error?(
    <h1>{userData.error}</h1>
   )
   :
   (
    <div>Success</div>
   )

}
const mapStateToProps=state=>{
  return{
    userData:state.users
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    fetchUsers:()=>dispatch(fetchUsers())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);