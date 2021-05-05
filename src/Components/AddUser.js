import React, { useState } from "react";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
    //console.log(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    //console.log(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: enteredUsername,
      age: +enteredAge,
      id: Math.random().toString()
    };

    if (userData.username === '') {
        props.onEmptyInput();
        return;
    }

    if (isNaN(userData.age) || userData.age <= 0) {
        props.onInvalidAge();
        return;
    }

    props.onSaveNewUser(userData);
    setEnteredUsername('');
    setEnteredAge('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={enteredUsername}
        onChange={usernameChangeHandler}
      ></input>
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="text" value={enteredAge} onChange={ageChangeHandler}></input>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
