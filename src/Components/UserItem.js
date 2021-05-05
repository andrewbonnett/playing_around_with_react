import React from "react";

const UserItem = (props) => {

  return (
    <div>
      <p>{props.username} ({props.age} years old)</p>
      <hr></hr>
    </div>
  );
};

export default UserItem;