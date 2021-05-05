import React from "react";

const Modal = (props) => {
  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <button onClick={props.onOkay}>Okay</button>
    </React.Fragment>
  );
};

export default Modal;
