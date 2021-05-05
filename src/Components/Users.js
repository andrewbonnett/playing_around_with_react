import React from "react";
import UserItem from "./UserItem";

const Users = (props) => {
  return (
    <ul>
      {props.userList.map((user) => (
        <UserItem key={user.id} username={user.username} age={user.age} />
      ))}
    </ul>
  );
};

export default Users;
