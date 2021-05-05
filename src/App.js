import React, { useState } from "react";
import AddUser from "./Components/AddUser";
import Users from "./Components/Users";
import Modal from "./Components/Modal";

const DUMMY_USERS = [
  {
    username: "Max",
    age: 15,
    id: "e1",
  },
  {
    username: "Adam",
    age: 23,
    id: "e2",
  },
];

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalError, setModalError] = useState("");

  const invalidAgeHandler = () => {
    setModalError({
      title: "Invalid Age",
      message: "Please enter a valid age (> 0).",
    });
    setShowModal(true);
  };

  const emptyInputHandler = () => {
    setModalError({
      title: "Invalid Input",
      message: "Please enter a valid name and age (non-empty values).",
    });
    setShowModal(true);
  };

  const clearModal = () => {
    setShowModal(false);
  };

  const [userList, setUserList] = useState(DUMMY_USERS);

  const saveNewUserHandler = (newUser) => {
    setUserList((prevUserList) => {
      return [newUser, ...prevUserList];
    });
  };

  return (
    <React.Fragment>
      {!showModal && (
        <AddUser
          onSaveNewUser={saveNewUserHandler}
          onInvalidAge={invalidAgeHandler}
          onEmptyInput={emptyInputHandler}
        />
      )}
      {!showModal && <Users userList={userList} />}
      {showModal && <Modal onOkay={clearModal} title={modalError.title} message={modalError.message}></Modal>}
    </React.Fragment>
  );
};

export default App;
