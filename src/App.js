import React, { useState } from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

 

function App() {
   const [userList, setUserlist]= useState([])
  const addUserListHandler =( uname, uage) =>{
    setUserlist((preuserlist) =>{
      return(
        [...preuserlist, { name:uname, age: uage, id: Math.random().toString()}]
      );
    })

  };
 
  return (
    <div>
      <AddUser onAddname={addUserListHandler}/>
      <UserList users={userList}/>
    </div>
   
  )
};

export default App;
