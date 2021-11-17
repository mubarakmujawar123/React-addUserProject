import React, { useState, Fragment } from 'react';
import './style.css';
import AddUsers from './Component/Users/AddUsers';
import UserList from './Component/Users/UserList';
export default function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (userName, userAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { id: Math.random().toString(), name: userName, age: userAge },
      ];
    });
  };
  return (
    <Fragment>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={userList} />
    </Fragment>
  );
}
