import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUsers.module.css';
const AddUsers = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User name</label>
        <input type="text" id="username" />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
