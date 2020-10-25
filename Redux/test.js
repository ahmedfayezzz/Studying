const fetchUsers=()=>{
  return function(testArg){
    console.log(testArg)
  }
}
const thunkResult = fetchUsers();
fetchUsers()(5)