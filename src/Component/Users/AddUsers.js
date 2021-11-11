import React from 'react';

const AddUsers = (props) => {
  const addUserHandler = (event) =>{
    event.preventDefault();
  }
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">User name</label>
      <input type="text" id="username" />
      <label htmlFor="age">Age</label>
      <input type="number" id="age" />
      <button type="submit">Add user</button>
    </form>
  );
};

export default AddUsers;
