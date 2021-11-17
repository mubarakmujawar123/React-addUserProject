import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUsers.module.css';
const AddUsers = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredUserAge, setEnteredUserAge] = useState('');
  const userNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const userAgeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      return;
    }
    if (+enteredUserAge < 1) {
      return;
    }
    console.log(enteredUserName, enteredUserAge);
    setEnteredUserName('');
    setEnteredUserAge('');
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User name</label>
        <input
          type="text"
          id="username"
          value={enteredUserName}
          onChange={userNameHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          value={enteredUserAge}
          onChange={userAgeHandler}
        />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
